import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const id = useParams()
  const [blog, setBlog] = useState({})
  console.log(id)
  const getApi=()=>{
    axios.get(`https://gbscoine.com/behyar/api/api/v1/blog/details/${id}`).then(res=>setBlog(res.data))
  }

  useEffect(()=>{
    getApi()
  },[])

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html:blog.des}} className="w-[700px]"/>
    </div>
  )
}

export default BlogDetails