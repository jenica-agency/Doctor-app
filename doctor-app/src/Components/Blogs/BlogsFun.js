import React, { Fragment } from 'react';
import { Link } from'react-router-dom';

import './Blog.css';

const BlogsFun = ({newBlogs}) => {
  return (
    <Fragment>
        <div className='row'>
            {newBlogs && newBlogs.map((Blog) => (
                <div className='col-lg-3 col-md-6 col-sm-12 home-blog' key={Blog.id}>
                  <div className='home-blog-content'>
                    <img src={Blog.pic} alt='blog not found' className='img-blog-home'/>
                    <h4 className='title-blog-home mt-4 '>{Blog.title}</h4>
                    <p className='pref-blog-home'>{Blog.description}</p>
                    <Link to={"/Blogs/"+ Blog.id} className="btn btn-info btn-blog-home">
                      read more 
                  </Link>
                  </div>
                    
                </div>
            ))}
        </div>
    </Fragment>
  )
};

export default BlogsFun