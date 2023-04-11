import React, { Fragment,useEffect } from 'react';
import { Link } from'react-router-dom';
import './Blog.css';

// translate links 
import {useTranslation} from 'react-i18next';

// animation 
import Aos from 'aos';
import "aos/dist/aos.css";

const BlogsFun = ({NewBlogs}) => {
  
   const {t} = useTranslation();

   useEffect(()=>{
      Aos.init({
        duration:1500
      });
    }, []);

  return (
    <Fragment>
    
        <div className='row blogs-container'>
             {NewBlogs &&  NewBlogs.map((blog) => (
                <div className='col-lg-3 col-md-6 col-sm-12 home-blog' key={blog._id}>
                  <div className='home-blog-content'>
                    <img src={blog.attachment} alt='blog not found' className='img-blog-home'/>
                    <h4 className='title-blog-home mt-4 ' data-aos="fade-down">{blog.header}</h4>
                    <p className='pref-blog-home'  data-aos="fade-up">{blog.brif}</p>
                    <Link to={`/Blogs/${blog._id}`} className="btn btn-info btn-blog-home">
                      {t('home.DoctorBtnReadMore')} 
                  </Link>
                  </div>
                    
                </div>
            ))}
        </div>
     
        
    </Fragment>
  )
};

export default BlogsFun