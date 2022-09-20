import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
// import styles from "./Header.module.css";
import { TbBell } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Hamburger from "./Hamburger";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [burger, setBurger] = useState(false);
  return (
    <div className="px-10">
      <header
        className={
          "max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-center mb-[100px]"
        }
      >
        <div className=" bg-[#ffffff] p-[20px] shadow-md w-32 mx-auto lg:mx-4">
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div>
          <div
            className={
              "flex justify-between items-center pt-[36px] px-[17px] mb-4"
            }
          >
            <div className={"flex flex-row"}>
              <span className="text-[#acacac] text-[13px] ml-[5px]">
                اخبار استخدامی :
              </span>
              <p className="text-gray-500 text-sm">استخدام مهندس سرامیک</p>
            </div>
            <div className="hidden lg:block">
              <ul className="flex justify-between">
                <li>
                  <Link
                    to="/"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ads"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    تبلیغات
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="ml-[28px] text-[#acacac] text-[12px] transition-all duration-200 hover:text-[#858585]"
                  >
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              "flex justify-between items-center bg-[#f3f3f3] py-[8px] px-[12px] rounded-lg w-full mx-auto lg:w-[750px] xl:w-[1000px] h-16"
            }
          >
            <nav className={"block mr-[20px] lg:hidden"}>
              <button onClick={() => setBurger(true)}>
                <GiHamburgerMenu />
              </button>
              
              <Hamburger burger={burger} setBurger={setBurger}/>
              
            </nav>
            <div className={"hidden lg:block"}>
              <ul className="flex w-[400px] p-[20px] ">
                <li className={"relative group"}>
                  <span className="flex flex-row items-center justify-between min-w-max text-[#a4a4a4] text-[15px] p-[10px] pl-[25px] border-transparent w-[50px]">
                    آگهی ها
                    <span>
                      <IoIosArrowDown className={"text-[15px] mx-1"} />
                    </span>
                  </span>
                  <div>
                    <ul className="group-hover:z-50 group-hover:block absolute top-[6px] bg-[#fff] border-t-2 border-t-[#0095da] rounded-xl py-4 px-4 mt-[35px] w-[133px] hidden ">
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">متالوژی</a>
                      </li>
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">سرامیک</a>
                      </li>
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">جوشکاری</a>
                      </li>
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">خوردگی</a>
                      </li>
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">بیو مواد</a>
                      </li>
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">کامپوزیت</a>
                      </li>
                      <li className="py-2 text-sm text-gray-800 hover:text-[#0095da] transition-colors duration-300 ">
                        <a href="#">نانو فناوری</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={
                "flex flex-row items-center text-2xl text-[#858585] mx-4"
              }
            >
              <button className="appearance-none mx-4">
                <TbBell />
              </button>
              <Link
                to="/sign-up"
                className=" bg-[#0095da] text-[#ffffff] rounded-md shadow-lg mr-4 p-2.5"
              >
                <CgProfile />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
