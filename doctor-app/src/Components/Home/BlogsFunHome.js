import React, { Fragment,useEffect } from 'react';
import { Link } from'react-router-dom';
import '../Blogs/Blog.css';


// translate links 
import {useTranslation} from 'react-i18next';

// animation 
import Aos from 'aos';
import "aos/dist/aos.css";

const BlogsFunHome = ({NewBlog}) => {
  
   const {t} = useTranslation();

   useEffect(()=>{
      Aos.init({
        duration:1500
      });
    }, []);

  

  return (
    <Fragment>
    
        <div className='row blogs-container'>
             {NewBlog &&  NewBlog.map((Blog) => (
                <div className='col-lg-3 col-md-6 col-sm-12 home-blog' key={Blog._id}>
                  <div className='home-blog-content'>
                    <img src={Blog.attachment} alt='blog not found' className='img-blog-home'/>
                    <h4 className='title-blog-home mt-4 ' data-aos="fade-down">{Blog.header}</h4>
                    <p className='pref-blog-home'  data-aos="fade-up">{Blog.brif}</p>
                    <Link to={`/Blogs/${Blog._id}`} className="btn btn-info btn-blog-home">
                      {t('home.DoctorBtnReadMore')} 
                  </Link>
                  </div>
                    
                </div>
            ))}
        </div>
     
        
    </Fragment>
  )
};

export default BlogsFunHome;