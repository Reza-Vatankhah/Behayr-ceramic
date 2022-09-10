import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState("");
  const [verificationCode, setVerificationCode] = useState();

  console.log(verificationCode);
  console.log(token);

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
      });
  };

  return (
    <div className={styles.container}>
      {status === 200 ? (
        <div>
          <h1 className={styles.message}>{message} </h1>
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
              placeholder={""}
            />
          </div>
          <div className={styles.buttonsRow}>
            <button onClick={confirmHandler} className={styles.confirmButton}>
              ثبت کد
            </button>
            <button onClick={changeInfoHandler} className={styles.changeButton}>
              تغییر اطلاعات{" "}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.titleBox}>
            <span>
              <FiUserPlus />
            </span>
            <div className={styles.title}>
              <h4>عضویت</h4>
              <p>حساب کاربری خود را ایجاد کنید</p>
            </div>
          </div>
          <Formik
            initialValues={{
              name: "",
              family: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              agree: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              const userData = {
                name: values.name,
                family: values.family,
                email: values.email,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
              };
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
                console.log(error.message);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.inputsRow}>
                  <div className={styles.inputAndError}>
                    <div className={styles.inputDiv}>
                      <span>
                        <BiUser />
                      </span>
                      <Field name="name" type="text" placeholder="نام" />
                    </div>
                    {errors.name && touched.name && (
                      <span className={styles.error}>{errors.name}</span>
                    )}
                  </div>
                  <div className={styles.inputAndError}>
                    <Field
                      name="family"
                      type={"text"}
                      placeholder="نام خانوادگی"
                    />
                    {errors.family && touched.family && (
                      <span className={styles.error}>{errors.family}</span>
                    )}
                  </div>
                </div>

                <div className={styles.fullInputAndError}>
                  <div className={styles.inputDivEmail}>
                    <span>
                      <AiOutlineMail />
                    </span>
                    <Field name="email" type={"email"} placeholder="ایمیل" />
                  </div>
                  {errors.email && touched.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.fullInputAndError}>
                  <div className={styles.inputDivPhone}>
                    <span>
                      <BsPhone />
                    </span>
                    <Field
                      name="phone"
                      type={"number"}
                      placeholder="شماره موبایل"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <span className={styles.error}>{errors.phone}</span>
                  )}
                </div>

                <div className={styles.inputsRow}>
                  <div className={styles.inputAndError}>
                    <div className={styles.inputDiv}>
                      <span>
                        <BsLock />
                      </span>
                      <Field
                        name="password"
                        type={"password"}
                        placeholder="گذرواژه"
                      />
                    </div>
                    {errors.password && touched.password && (
                      <span className={styles.error}>{errors.password}</span>
                    )}
                  </div>
                  <div className={styles.inputAndError}>
                    <Field
                      name="confirmPassword"
                      type={"password"}
                      placeholder="تکرار گذرواژه"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <span className={styles.error}>
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.agreeDiv}>
                  <label>
                    <Field name="agree" type="checkbox" id="agree" />
                    با قوانین و مقررات سایت موافقم
                  </label>
                  {errors.agree && touched.agree && (
                    <span className={styles.error}>{errors.agree}</span>
                  )}
                </div>
                <div className={styles.buttonsRow}>
                  <button
                    type="submit"
                    className={`${styles.signupButton} ${
                      loading && styles.loading
                    }`}
                    disabled={loading}
                  >
                    <p>ثبت نام</p>
                    <span>
                      <BsArrowLeft />
                    </span>
                  </button>
                  <div className={styles.loginDiv}>
                    <span>حساب کاربری دارید؟</span>
                    <button className={styles.loginButton}>وارد شوید</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default SignUp;
