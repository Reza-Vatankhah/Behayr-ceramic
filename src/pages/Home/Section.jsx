import React from "react";
import photo from "../../assets/img/photo.webp";
import styles from "./Section.module.css";
import { FaVideo } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Section() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.popularArticleHead}>
          <div className={styles.title}>
            <i>
              <FaVideo />
            </i>
            <h2>منتخب سردبیر</h2>
          </div>
          <div>
            <span>مجموعه مقالات اخیر و برتر ماه به انتخاب سردبیر</span>
          </div>
        </div>
        <div className={styles.popularArticleContent}>
          <div className={styles.cards}>
            <Carousel responsive={responsive}>
              <div className={styles.card}>
                <img src={photo} alt="" />
                <a href="#">لورم ایپسوم یا طرح‌نما</a>
                <div>
                  <span>7</span>
                  <span>دقیقه مطالعه</span>
                  <span>1 ماه پیش</span>
                </div>
              </div>
              <div className={styles.card}>
                <img src={photo} alt="" />
                <a href="#">لورم ایپسوم یا طرح‌نما</a>
                <div>
                  <span>7</span>
                  <span>دقیقه مطالعه</span>
                  <span>1 ماه پیش</span>
                </div>
              </div>
              <div className={styles.card}>
                <img src={photo} alt="" />
                <a href="#">لورم ایپسوم یا طرح‌نما</a>
                <div>
                  <span>5</span>
                  <span>دقیقه مطالعه</span>
                  <span>1 ماه پیش</span>
                </div>
              </div>
            </Carousel>
          </div>
          <div className={styles.articles}>
            <ul>
              <li>
                <a href="#" title="لورم ایپسوم متن ساختگی">
                  <span>لورم ایپسوم متن ساختگی</span>
                  <span>5</span>
                  <span>دقیقه مطالعه</span>
                </a>
              </li>
              <li>
                <a href="#" title="لورم ایپسوم متن ساختگی">
                  <span>لورم ایپسوم متن ساختگی</span>
                  <span>9</span>
                  <span>دقیقه مطالعه</span>
                </a>
              </li>
              <li>
                <a href="#" title="لورم ایپسوم متن ساختگی">
                  <span>لورم ایپسوم متن ساختگی</span>
                  <span>12</span>
                  <span>دقیقه مطالعه</span>
                </a>
              </li>
              <li>
                <a href="#" title="لورم ایپسوم متن ساختگی">
                  <span>لورم ایپسوم متن ساختگی</span>
                  <span>6</span>
                  <span>دقیقه مطالعه</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
