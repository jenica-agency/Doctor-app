import React from 'react'
import BlogsFun from './BlogsFun';
import BlogModel from "./BlogsModel";

function Blogs() {

 const {BlogData} = BlogModel("/blogs/");  

//  console.log(BlogData);
  return (
    <div className='container mt-5 blog'>
      <BlogsFun NewBlogs ={BlogData}>
      </BlogsFun>
       

    </div>
  )
}

export default Blogs