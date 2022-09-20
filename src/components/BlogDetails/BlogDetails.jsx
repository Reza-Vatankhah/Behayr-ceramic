import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../HOC/Layout";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import PersianNumber from "../../PersianNumber";

const social = [
  { icon: <FaTelegramPlane />, name: "تلگرام" },
  { icon: <TiSocialInstagram />, name: "اینستاکرام" },
  { icon: <TiSocialFacebook />, name: "فیسبوک" },
  { icon: <TiSocialTwitter />, name: "توییتر" },
  { icon: <TiSocialLinkedin />, name: "لینکدین" },
];

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

const BlogDetails = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const id = location.state?.id;
  console.log(location);
  console.log(id);
  const slug = useParams();
  const [blog, setBlog] = useState({});
  console.log(slug);
  const getApi = () => {
    axios
      .get(`https://gbscoine.com/behyar/api/api/v1/blog/details/${id}`)
      .then((res) => setBlog(res.data));
  };

  useEffect(() => {
    getApi();
  }, []);
  console.log(blog);
  // useEffect(()=>{
  // const toggleStciky=()=>{
  //   if (window.pageYOffset>1000) {
  //     setSticky(true)
  //   }if (condition) {

  //   }
  // }
  // window.addEventListener("scroll",     console.log(document.documentElement.offsetHeight)
  // );
  // },)
  console.log(document.documentElement.offsetHeight - 500);

  const createdNumber = (date) => {
      const number = date.slice(0, 1);
      return number;
  };
  const createdText = (string) => {
    const text = string.slice(1);
    return text;
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse justify-start items-start max-w-[1200px] mx-auto">
        <div className="w-11/12 md:w-[700px] lg:w-[900px] mx-auto lg:m-4">
          <h1 className="text-lg font-semibold">{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.des }} />
          <div className="flex flex-col justify-start items-start shadow-lg rounded-lg py-6 px-6 w-full my-6">
            <div className="flex flex-row justify-between items-center w-full border-b-2">
              <div className="text-sm ">
                <p className="my-2 ">آیا مقاله برای شما مفید بود؟</p>
                <button className=" my-4 focus:bg-white focus:text-blue-700 focus:shadow-lg focus:shadow-blue-200 rounded-lg bg-blue-600 text-white font-vazir outline-none px-3 py-1 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:shadow-blue-200 transition-all duration-500">
                  عالی بود
                </button>
                <button className="my-4 focus:bg-white focus:text-blue-700 focus:shadow-lg focus:shadow-blue-200 mx-4 rounded-lg bg-blue-600 text-white font-vazir outline-none px-3 py-1 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:shadow-blue-200 transition-all duration-500">
                  خوب بود
                </button>
                <button className="my-4 focus:bg-white focus:text-blue-700 focus:shadow-lg focus:shadow-blue-200 rounded-lg bg-blue-600 text-white font-vazir outline-none px-3 py-1 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:shadow-blue-200 transition-all duration-500">
                  بد بود
                </button>
              </div>
              <div>star</div>
            </div>
            <div className="flex flex-row justify-between items-center mt-6">
              {social.map((item, index) => (
                <div
                  className="text-gray-500 group w-max flex flex-row items-center justify-start "
                  key={index}
                >
                  <i className="  w-[16px] text-[20px] mx-2 group-hover:text-blue-700">
                    {item.icon}
                  </i>
                  <span className=" text-[0px] group-hover:text-[10px] transition-all duration-500 text-blue-700 mr-1">
                    {" "}
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mx-auto">
            <Carousel responsive={responsive}>
              {blog.related_post ? (
                blog.related_post.map((item) => (
                  <div
                    className={"w-64 h-auto m-4 rounded-lg text-right "}
                    style={{ direction: "rtl" }}
                    key={item.id}
                  >
                    <Link
                      to={`/blog/details/${item.slug}`}
                      state={{ id: item.id }}
                    >
                      <img
                        src={item.image}
                        className="w-full h-52 rounded-[20px] rounded-br-none shadow-md"
                        alt="blog"
                      />
                    </Link>
                    <Link
                      to={`blog/details/${item.slug}`}
                      state={{ id: item.id }}
                    >
                      <h4 className="text-base text-[#555] font-semibold hover:text-blue-700 transition-colors duration-500 my-3">
                        {item.title}
                      </h4>
                    </Link>
                    <div>
                      <span className="text-xs border-b-2">
                        {" "}
                        <PersianNumber
                          number={createdNumber(item.created_at)}
                        />{" "}
                        {createdText(item.created_at)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </Carousel>
          </div>
        </div>

        <div className="w-[270px] mx-auto lg:ml-7 lg:mr-4 rounded-lg shadow-lg bg-white lg:sticky lg:top-1">
          <div>
            <img src={blog.image} alt="blog" />
          </div>
          <div>
            <div>star</div>
            <div className="flex flex-col items-start justify-start w-full p-4 text-[12px] gap-4">
              <div className="flex flex-row justify-between items-start w-full ">
                <span className="font-semibold">دسته بندی </span>
                <span className="text-gray-700">متالوژی</span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="font-semibold">تاریخ انتشار</span>
                <span className="text-gray-700">
                  {blog.created_at}
                </span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="font-semibold"> بازدید</span>
                <span className="text-gray-700">5581 نفر</span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="font-semibold"> دیدگاه</span>
                <span className="text-gray-700"> 1 دیدگاه</span>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <span className="font-semibold"> نویسنده</span>
                <span className="text-gray-700">حسین مهرآبادی </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(BlogDetails);
