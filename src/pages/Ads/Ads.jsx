import React from "react";
import Logo from "../../assets/img/advvvv.png";
import alexa from "../../assets/img/alexa.png";
import googleAn from "../../assets/img/google-an.png";
import google from "../../assets/img/search-consol-google.jpg";
import ads from "../../assets/img/adv-ff.jpg";
import styles from "./Ads.module.css";
import PersianNumber from "../../PersianNumber";
import Layout from "../../components/HOC/Layout";

const Ads = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tblig}>
        <h2>تــبلیغـات</h2>
      </div>
      <div className={styles.adsInfo}>
        <div className={styles.aside}>
          <div>
            <img className={styles.logo} src={Logo} alt="" />
          </div>
          <ul>
            <li>
              <span>میانگین بازدید ماهانه</span>
              <div className={styles.numbers}>
                <PersianNumber number={187262} />
              </div>
            </li>
            <li>
              <span>صفحات اندکس شده در گوگل</span>
              <div className={styles.numbers}>
                <PersianNumber  number={5034} />
              </div>
            </li>
            <li>
              <span>حضور در صفحه اول نتایج گوگل</span>
              <div className={styles.numbers}>
                <PersianNumber  number={983} />
              </div>
            </li>
            <li>
              <span>رتبه الکسا در ایران</span>
              <div className={styles.numbers}>
                <PersianNumber  number={5600} />
              </div>
            </li>
            <li className={styles.analyse}>
              <span className={styles.text}>آمارهای اعلام شده مطابق با مراجع رسمی و معتبر</span>

              <div >
                <span>
                  <img src={alexa} alt="photo" />
                </span>
                <span>
                  <img src={googleAn} alt="photo" />
                </span>
                <span>
                  <img src={google} alt="photo" />
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.main}>
          <div>
            <img src={ads} alt="" />
            <div>
              <p>
                ایران مواد به عنوان یک رسانه تاثیرگذار و پرمخاطب در حوزه های
                مهندسی مواد، متالورژی، مکانیک و شیمی فرصت های بی نظیری برای
                برندسازی، افزایش فروش و توسعه کسب و کار شما فراهم نموده است.
              </p>
              <br />
              <p>
                مخاطبین ما دانشگاهیان، صنعتگران و تجار حوزه های مواد مهندسی و
                ساخت و تولید هستند. محتوای گسترده و تخصصی علمی و مهندسی در بیش
                از 5000 صفحه وب با بیش از 10 سال سابقه فعالیت، شرایطی بی بدل
                برای تبلیغات در زمینه های مرتبط ایجاد نموده است که نمونه آن در
                هیچ رسانه فارسی دیگر در این زمینه تخصصی یافت نمی گردد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(Ads);
