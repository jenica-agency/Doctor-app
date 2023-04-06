import React from 'react'
import BlogsFun from './BlogsFun';
import BlogsModel from "./BlogsModel";

function Blogs() {

 const {Blogs, isWaiting} = BlogsModel("/blogs/");  

//  console.log(Blogs);
  return (
    <div className='container mt-5 blog'>
      <BlogsFun NewBlogs ={Blogs}>
      </BlogsFun>
       {isWaiting && <h1> please wait loading data ..... </h1>}

    </div>
  )
}

export default Blogs