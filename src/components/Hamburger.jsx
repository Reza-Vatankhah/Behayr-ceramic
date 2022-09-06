import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Hamburger.module.css";

import { CgMenu, CgClose } from "react-icons/cg";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.hamburger}>
      <div>
        {open && (
          <ul>
            <div>
              <CgClose onClick={(e)=> setOpen(false)} className={styles.closeHamburger} />
            </div>
            <li>
              <Link to="#">مقالات</Link>
            </li>
            <li>
              <Link to="#">اخبار</Link>
            </li>
            <li>
              <Link to="#">ویدیوهای آموزشی</Link>
            </li>
            <li>
              <Link to="#">خدمات</Link>
            </li>
            <li>
              <Link to="#">مواد</Link>
            </li>
            <li>
              <Link to="#">تجهیزات</Link>
            </li>
            <li>
              <Link to="#">دانلود</Link>
            </li>
            <li>
              <Link to="#">تبلیغات</Link>
            </li>
            <li>
              <Link to="#">ارتباط با ما</Link>
            </li>
          </ul>
        )}
      </div>
      {/* <div> */}
      <CgMenu onClick={(e)=> setOpen(true)} className={styles.hamburgerIcon} />
      {/* </div> */}
    </div>
  );
};

export default Hamburger;
