import React, { useState } from "react";
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
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <span>
          <FiUserPlus />
        </span>
        <div className={styles.title}>
          <h4 className="">ورود</h4>
          <p className="font-vazir">وارد حساب کاربری خود شوید</p>
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
            <div className={styles.fullInputAndError}>
              <div className={styles.inputDiv}>
                <span>
                  <AiOutlineMail />
                </span>
                <Field name="phone" type={"number"} placeholder="شماره تماس" />
              </div>
              {errors.email && touched.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>
            <div className={styles.fullInputAndError}>
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

            <div className={styles.buttonsRow}>
              <button type="submit" className={`${styles.loginButton}`}>
                <p> ورود </p>
                <span>
                  <BsArrowLeft />
                </span>
              </button>
              <div className={styles.loginDiv}>
                <span>حساب کاربری ندارید؟</span>
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
