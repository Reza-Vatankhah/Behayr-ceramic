import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { FiUserPlus } from "react-icons/fi";
import {BiUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {BsPhone , BsLock} from "react-icons/bs"

const SignUp = () => {
  // const [number, setNumber] = useState([])

  // useEffect (() => {
  //   axios.post('https://gbscoine.com/behyar/api/api/v1/register')
  //     .then(response => setNumber(response.data))
  // },[])

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {},
  });

  const formData = [
    {
      name: "fName",
      value: formik.initialValues.fName,
      type: "text",
      id: 0,
      touched: formik.touched.fName,
      errors: formik.errors.fName,
      placeHolder: "نام",
    },
    {
      name: "lName",
      value: formik.initialValues.lName,
      type: "text",
      id: 1,
      touched: formik.touched.lName,
      errors: formik.errors.lName,
      placeHolder: "نام خانوادگی",
    },
    {
      name: "email",
      value: formik.initialValues.email,
      type: "email",
      id: 2,
      touched: formik.touched.email,
      errors: formik.errors.email,
      placeHolder: "ایمیل",
    },
    {
      name: "phoneNumber",
      value: formik.initialValues.phoneNumber,
      type: "number",
      id: 3,
      touched: formik.touched.phoneNumber,
      errors: formik.errors.phoneNumber,
      placeHolder: "شماره تلفن",
    },
    {
      name: "password",
      value: formik.initialValues.password,
      type: "password",
      id: 4,
      touched: formik.touched.password,
      errors: formik.errors.password,
      placeHolder: "گذرواژه ",
    },
    {
      name: "confirmPassword",
      value: formik.initialValues.confirmPassword,
      type: "confirmPassword",
      id: 5,
      touched: formik.touched.confirmPassword,
      errors: formik.errors.confirmPassword,
      placeHolder: "تکرار گذرواژه ",
    },
  ];

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

      <form>
        {formData.map((input) => (
          <input
            name={input.name}
            value={input.value}
            key={input.id}
            type={input.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={input.placeHolder}
          />
        ))}
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
