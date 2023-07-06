import React from 'react'
// import BlogsFun from './BlogsFun';
import BlogsModelHome from "./BlogsModelHome";
import BlogsFunHome from './BlogsFunHome';

function BlogsHome() {

 const {BlogsData} = BlogsModelHome("/blogs/");  

//  console.log(BlogData);
  return (
    <div className='container mt-5 blog'>
      <BlogsFunHome NewBlog={BlogsData}></BlogsFunHome>
       

    </div>
  )
}

export default BlogsHome;