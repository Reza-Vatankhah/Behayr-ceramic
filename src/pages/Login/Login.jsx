import React from "react";
import styles from "./Login.module.css";
import { Field, Form, Formik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsLock } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Layout from "../../components/HOC/Layout";

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .max(10, "حداکثر باید 10 رقم باشد"),
  password: Yup.string()
    .required("پر کردن این فیلد الزامی است")
    .min(6, "حداقل باید 6 کاراکتر باشد"),
});

const Login = () => {
  const initialValues = {
    phone: "",
    password: "",
  };
  return (
    <div className="w-[580px] h-auto px-5 py-10 rounded-2xl mx-auto shadow-2xl">
      <div className="flex flex-row items-center mt-3 my-10">
        <span className="text-2xl h-6 text-[#0095da]">
          <FiUserPlus />
        </span>
        <div className={styles.title}>
          <h4 className="text-xl bold px-3 font-vazir">ورود</h4>
          <p className="font-vazir px-3 text-sm">وارد حساب کاربری خود شوید</p>
        </div>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col items-start w-full h-20 mt-3 sm:w-full">
              <div className="w-full flex flex-row items-center justify-start">
                <span className="text-lg h-5">
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
                <span className="text-[#ff0000] text-xs bold my-1 mx-10 block font-vazir ">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start w-full h-20 mt-3 sm:w-full">
              <div className="w-full flex flex-row items-center justify-start">
                <span className="text-lg h-5">
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
                <span className="text-[#ff0000] text-xs bold my-1 mx-10 block font-vazir">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="sm:mt-9 sm:flex sm:flex-row sm:justify-between sm:items-center mt-9 flex flex-col items-center">
              <button type="submit" className={`${styles.loginButton}`}>
                <p className="text-base font-vazir"> ورود </p>
                <span className="text-2xl h-6">
                  <BsArrowLeft />
                </span>
              </button>
              <div className={styles.loginDiv}>
                <span className="font-vazir">حساب کاربری ندارید؟</span>
                <Link to="/sign-up">
                  <button className={styles.signupButton}> ثبت نام </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Layout(Login);
