import React from "react";
import { useEffect } from "react";
import { axios } from "axios";
import { useState } from "react";
import Layout from "../../components/HOC/Layout";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  function getBlogs() {
    axios.get('https://gbscoine.com/behyar/api/api/v1/blog')
      .then((response) => response.data)
      .then((data) => {
        setBlog(data);
      });
  }
  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blog);

  return <div>Blogs</div>;
};

export default Layout(Blog);
