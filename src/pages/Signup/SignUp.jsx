import React, { useState } from "react";

import styles from "./SignUp.module.css";
import { Field, Form, Formik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsLock } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import * as Yup from "yup";
import axios from "axios";
import ReactInputVerificationCode from "react-input-verification-code";
import Layout from "../../components/HOC/Layout";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "حداقل طول اسم باید 3 حرف باشد")
    .required("پر کردن این فیلد الزامی است"),
  family: Yup.string()
    .min(3, "حداقل اسم باید 3 حرف باشد")
    .required("پر کردن این فیلد الزامی است"),
  email: Yup.string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("پر کردن این فیلد الزامی است"),
  phone: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .max(10, "حداکثر باید 10 رقم باشد"),
  password: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .min(6, "حداقل باید 6 کاراکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "پسورد وارد شده صحیح نیست")
    .required("پر کردن این فیلد الزامی است"),
  agree: Yup.bool().oneOf([true], "ابتدا قوانین را تایید کنید"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState("");
  const [verifyStatus, setVerifyStatus] = useState("");
  const [verificationCode, setVerificationCode] = useState();

  console.log(verificationCode);

  const changeInfoHandler = () => {
    setStatus(0);
    setLoading(false);
  };
  const confirmHandler = (e) => {
    e.preventDefault();
    const code = {
      sms: verificationCode,
      token: token,
    };
    axios
      .post("https://gbscoine.com/behyar/api/api/v1/active-code", code)
      .then((response) => {
        console.log(response.data.status);
        console.log(response.data.message);
        console.log(response.data.token);
        setVerifyStatus(response.data.status);
      });
  };


  const initialValues = {
    name: "" || userData.name,
    family: "" || userData.family,
    email: "" || userData.email,
    phone: "" || userData.phone,
    password: "" || userData.password,
    confirmPassword: "" || userData.confirmPassword,
    agree: false || userData.agree,
  };

  return (
    <div className="w-[580px] h-auto px-5 py-10 rounded-2xl mx-auto shadow-2xl">
      {status === 200 ? (
        <div>
          <h1 className="text-lg mb-5">{message} </h1>
          <div
            className={styles.divVerify}
            style={{
              direction: "ltr",
              width: "fit-content",
              margin: "60px auto",
            }}
          >
            <ReactInputVerificationCode
              onChange={setVerificationCode}
              className={styles.inputvalue}
              placeholder={"0"}
            />
          </div>
          <div className="mt-9 flex items-center flex-col">
            <button onClick={confirmHandler} className={styles.confirmButton}>
              ثبت کد
            </button>
            <button
              onClick={changeInfoHandler}
              className="rounded-[50px] text-white appearance-none outline-none bg-slate-700 border-none w-[120px] p-3 cursor-pointer transition-all text-base mr-2 hover:bg-white hover:text-gray-800 shadow-sm font-vazir "
            >
              تغییر اطلاعات{" "}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row items-center mt-2 mb-10">
            <span className="text-2xl h-6 text-[#0095da]">
              <FiUserPlus />
            </span>
            <div>
              <h4 className="text-2xl font-bold px-3 font-vazir">عضویت</h4>
              <p className="py-3 text-base font-vazir">
                حساب کاربری خود را ایجاد کنید
              </p>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={initialValues || userData}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              setUserData({ ...values });
              try {
                setLoading(true);
                const res = await axios.post(
                  "https://gbscoine.com/behyar/api/api/v1/register",
                  userData
                );
                setStatus(res.status);
                setMessage(res.data.message);
                setToken(res.data.token);
                console.log(res.status);
                console.log(res.data.message);
                console.log(res.data.token);
              } catch (error) {
                setLoading(false);
                console.log(error.message);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex-col items-start justify-center w-full sm:flex sm:flex-row sm:items-center sm:justify-between sm:w-full sm:mt-2">
                  <div className="flex flex-col items-start w-3/6 h-20 mr-2">
                    <div className={styles.inputDiv}>
                      <span>
                        <BiUser />
                      </span>
                      <Field
                        className="placeholder:font-vazir text-sm font-vazir "
                        name="name"
                        type="text"
                        placeholder="نام"
                      />
                    </div>
                    {errors.name && touched.name && (
                      <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-start w-3/6 h-20 mr-2">
                    <Field
                      className="placeholder:font-vazir text-sm font-vazir"
                      name="family"
                      type={"text"}
                      placeholder="نام خانوادگی"
                    />
                    {errors.family && touched.family && (
                      <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                        {errors.family}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start flex-col w-full h-[90px] mt-1">
                  <div className="w-[98%] flex flex-row items-center justify-start mr-2 sm:w-full">
                    <span className="text-lg h-4">
                      <AiOutlineMail />
                    </span>
                    <Field
                      className="placeholder:font-vazir text-sm font-vazir"
                      name="email"
                      type={"email"}
                      placeholder="ایمیل"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex items-start flex-col w-full h-[90px] mt-2">
                  <div className="w-[98%] flex flex-row items-center justify-start mr-2 sm:w-full">
                    <span className="text-lg h-4">
                      <BsPhone />
                    </span>
                    <Field
                      className="placeholder:font-vazir text-sm font-vazir"
                      name="phone"
                      type={"number"}
                      placeholder="شماره موبایل"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="flex-col items-start justify-center w-full sm:flex sm:flex-row sm:items-center sm:justify-between sm:w-full sm:mt-2">
                  <div className="flex flex-col items-start w-3/6 h-20 mr-2">
                    <div className={styles.inputDiv}>
                      <span>
                        <BsLock />
                      </span>
                      <Field
                        className="placeholder:font-vazir text-sm font-vazir"
                        name="password"
                        type={"password"}
                        placeholder="گذرواژه"
                      />
                    </div>
                    {errors.password && touched.password && (
                      <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-start w-3/6 h-20 mr-2">
                    <Field
                      className="placeholder:font-vazir text-sm font-vazir "
                      name="confirmPassword"
                      type={"password"}
                      placeholder="تکرار گذرواژه"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-7 pr-5 h-10 font-vazir">
                  <label>
                    <Field name="agree" type="checkbox" id="agree" />
                    با قوانین و مقررات سایت موافقم
                  </label>
                  {errors.agree && touched.agree && (
                    <span className="text-xs font-vazir text-[#ff0000] my-2 mx-10">
                      {errors.agree}
                    </span>
                  )}
                </div>
                <div className="mt-9 flex flex-row justify-between items-center">
                  <button
                    type="submit"
                    className={`${styles.signupButton} ${
                      loading && styles.loading
                    }`}
                    disabled={loading}
                  >
                    <p className="text-sm font-vazir">ثبت نام</p>
                    <span>
                      <BsArrowLeft />
                    </span>
                  </button>
                  <div className="flex flex-col sm:flex-row sm:items-center mt-6">
                    <span className="text-sm font-vazir">
                      حساب کاربری دارید؟
                    </span>
                    <Link to="/login">
                      <button className="rounded-[50px] text-white appearance-none outline-none bg-slate-700 border-none w-[100px] p-3 cursor-pointer transition-all text-base mr-2 hover:bg-white hover:text-gray-800 shadow-sm font-vazir">
                        وارد شوید
                      </button>
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Layout(SignUp);
