import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

// styles
import styles from "./Header.module.css";

//icons
// import { AiOutlineSearch } from "react-icons/ai";
import { TbBell } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <div>
      <header className={styles.siteHeader}>
        <div className={styles.siteHeaderLogo}>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className={styles.col}>
          <div className={styles.navbar}>
            <div className={styles.news} style={{ display: "flex" }}>
              <span>اخبار استخدامی :</span>
              <p>استخدام مهندس سرامیک</p>
            </div>
            <div className={styles.nav}>
              <ul>
                <li>
                  <Link to="/">صفحه اصلی</Link>
                </li>
                <li>
                  <Link to="/ads">تبلیغات</Link>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <a href="#">ارتباط با ما</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.menu}>
            <nav className={styles.burgerNav}>
              <Hamburger />
            </nav>
            <div className={styles.list}>
              <ul>
                <li className={styles.showMoreMenu}>
                  <a href="#" className={styles.navbarLinks}>
                    آگهی ها
                    <IoIosArrowDown className={styles.arrow} />
                  </a>
                  <div className={styles.moreMenu}>
                    <ul>
                      <li>
                        <a href="#">متالوژی</a>
                      </li>
                      <li>
                        <a href="#">سرامیک</a>
                      </li>
                      <li>
                        <a href="#">جوشکاری</a>
                      </li>
                      <li>
                        <a href="#">خوردگی</a>
                      </li>
                      <li>
                        <a href="#">بیو مواد</a>
                      </li>
                      <li>
                        <a href="#">کامپوزیت</a>
                      </li>
                      <li>
                        <a href="#">نانو فناوری</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles.showMoreMenu}>
                  <a href="#" className={styles.navbarLinks}>
                    اخبار
                    <IoIosArrowDown className={styles.arrow} />
                  </a>
                  <div className={styles.moreMenu}>
                    <ul>
                      <li>
                        <a href="#">استخدام</a>
                      </li>
                      <li>
                        <a href="#">تازه های علمی</a>
                      </li>
                      <li>
                        <a href="#">همایش</a>
                      </li>
                      <li>
                        <a href="#">کنفرانسها</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles.showMoreMenu}>
                  <a href="#" className={styles.navbarLinks}>
                    ویدیو های آموزشی
                    <IoIosArrowDown className={styles.arrow} />
                  </a>
                  <div className={styles.moreMenu}>
                    <ul>
                      <li>
                        <a href="#">علمی</a>
                      </li>
                      <li>
                        <a href="#">فرهنگی</a>
                      </li>
                      <li>
                        <a href="#">آموزشی</a>
                      </li>
                      <li>
                        <a href="#">درسی</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={styles.showMoreMenu}>
                  <a href="#" className={styles.navbarLinks}>
                    خدمات
                    <IoIosArrowDown className={styles.arrow} />
                  </a>
                  <div className={styles.moreMenu}>
                    <ul>
                      <li>
                        <a href="#">متالوژی</a>
                      </li>
                      <li>
                        <a href="#">سرامیک</a>
                      </li>
                      <li>
                        <a href="#">جوشکاری</a>
                      </li>
                      <li>
                        <a href="#">خوردگی</a>
                      </li>
                      <li>
                        <a href="#">بیو مواد</a>
                      </li>
                      <li>
                        <a href="#">کامپوزیت</a>
                      </li>
                      <li>
                        <a href="#">نانو فناوری</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.icons}>
              {/* <AiOutlineSearch className={styles.icon} /> */}
              <TbBell className={styles.icon} />
              <Link to="/sign-up">
                <CgProfile className={styles.icon && styles.lastIcon} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
