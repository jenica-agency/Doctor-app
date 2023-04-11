
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import './SingleBlog.css';


// import img from '../../images/blog-imag-1.jpg'


import BlogModel from '../BlogsModel';

function SingleBlog() {
    const {_id} = useParams();
   
    // console.log(Blogs);
    console.log(_id);    
    const {blog} = BlogModel("/blogs/"+_id);  
   
    console.log(blog);
  return (
    <Fragment>
       {blog && (
                <section className='single-blog-header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='img-single-blog-left col-lg-5 col-md-6 col-sm-12'>
                                <img src={blog.attachment} alt='blog not found' className='img-blog-home'/>
                            </div>
                            <div className='content-single-blog-right col-lg-7 col-md-6 col-sm-12'>
                                <h3 className='pt-5'> {blog.header} </h3>
                                <h5> {blog.brif}</h5>
                                <p> {blog.content} </p>
                            </div>

                        </div>
                    </div>
                </section>
       )}
     
    </Fragment>
    
  )
}

export default SingleBlog