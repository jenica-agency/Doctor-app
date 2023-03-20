import React from 'react'
import BlogsFun from './BlogsFun';
import dataBlogs from '../Api/dataBlogs';

function Blogs() {

  const Blogs = dataBlogs;
  console.log(Blogs);
  return (
    <div className='container mt-5 blog'>

      <BlogsFun newBlogs ={Blogs}>

      </BlogsFun>
    </div>
  )
}

export default Blogs