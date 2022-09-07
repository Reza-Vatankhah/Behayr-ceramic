import React from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsLock } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fName: Yup.string()
    .min(3, "حداقل طول اسم باید 3 حرف باشد")
    .required("پر کردن این فیلد الزامی است"),
  lName: Yup.string()
    .min(3, "حداقل اسم باید 3 حرف باشد")
    .required("پر کردن این فیلد الزامی است"),
  email: Yup.string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("پر کردن این فیلد الزامی است"),
  phoneNumber: Yup.string()
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
  return (
    <div className={styles.container}>
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
          fName: "",
          lName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          agree: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
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
                  <Field name="fName" type="text" placeholder="نام" />
                </div>
                {errors.fName && touched.fName && (
                  <span className={styles.error}>{errors.fName}</span>
                )}
              </div>
              <div className={styles.inputAndError}>
                <Field name="lName" type={"text"} placeholder="نام خانوادگی" />
                {errors.lName && touched.lName && (
                  <span className={styles.error}>{errors.lName}</span>
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
                  name="phoneNumber"
                  type={"number"}
                  placeholder="شماره موبایل"
                />
              </div>
              {errors.phoneNumber && touched.phoneNumber && (
                <span className={styles.error}>{errors.phoneNumber}</span>
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
                  <span className={styles.error}>{errors.confirmPassword}</span>
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
              <button type="submit" className={styles.signupButton}>
                <p>ثبت نام</p>
                <span>
                  <BsArrowLeft />
                </span>
              </button>
              <div>
                <span>حساب کاربری دارید؟</span>
                <button className={styles.loginButton}>وارد شوید</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
