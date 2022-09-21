import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { MdArticle } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import PersianNumber from "../../PersianNumber";

function LastBlogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogsApi = () => {
    axios
      .get("https://gbscoine.com/behyar/api/api/v1/blog")
      .then((res) => setBlogs(res.data));
  };

  useEffect(() => {
    getBlogsApi();
  }, []);

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

  const createdNumber=(date)=>{
    const number=date.slice(0,1)
    return number
  }
  const createdText=(string)=>{
    const text=string.slice(1)
    return text
  }

  return (
    <div className={"max-w-7xl mx-auto my-[40px]"}>
      <div
        className={
          "flex flex-row justify-between items-center flex-wrap mb-[50px]"
        }
      >
        <div className={"flex items-center justify-start w-max title"}>
          <i className="text-blue-700 text-3xl mx-3">
            <MdArticle />
          </i>
          <h2 className="font-semibold">منتخب سردبیر</h2>
        </div>
        <span className="tracking-[15px] text-xs text-[#d2d2d2] hidden lg:inline-block">
          __________________________
        </span>
        <div>
          <span className="text-sm">
            مجموعه مقالات اخیر و برتر ماه به انتخاب سردبیر
          </span>
        </div>
      </div>

      <div className={styles.cards}>

        <Carousel responsive={responsive} >
          {blogs.map((blog) => (
            <div className={"w-96 h-auto m-2 rounded-lg text-right hover:shadow-md transition-shadow duration-300"} style={{direction:"rtl"}} key={blog.id}>
              <Link to={`/blog/details/${blog.slug}`} state={{id:blog.id}}>
                <img
                  src={blog.image}
                  className="w-full h-52 rounded-[20px] rounded-br-none shadow-md"
                  alt="blog"
                />
              </Link>
              <Link to={`blog/details/${blog.slug}`} state={{id:blog.id}}>
                <h4 className="px-4 text-base text-[#555] font-semibold hover:text-blue-700 transition-colors duration-500 my-3">
                  {blog.title}
                </h4>
              </Link>
              <div className="p-4 pt-0">
                <span className=" text-xs border-b-2"> <PersianNumber number={createdNumber(blog.created_at)}/> {createdText(blog.created_at)}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default LastBlogs;
