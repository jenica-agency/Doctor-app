import React, { Fragment,useEffect,useState } from 'react';
import { Link, Route} from'react-router-dom';
import './Blog.css';


// translate links 
import {useTranslation} from 'react-i18next';

// animation 
import Aos from 'aos';
import "aos/dist/aos.css";

const BlogsFun = ({NewBlogs}) => {
    const [selectedObject, setSelectedObject] = useState(null);

  const handleClick = (NewBlog) => {
    setSelectedObject(NewBlog);
  }
   const {t} = useTranslation();

   useEffect(()=>{
      Aos.init({
        duration:1500
      });
    }, []);

  // viewElement(id)=>(    // link to single blog page
  //   //  <Router to={`/Blogs/${blog._id}`}> </Router> 

  //   // onInit => call url blog data
  //   return null;
  // );
 console.log(NewBlogs);
  return (
    <Fragment>
    
        <div className='row blogs-container'>
             { NewBlogs.map((NewBlog) => (
                <div className='col-lg-3 col-md-6 col-sm-12 home-blog' key={NewBlog._id}>
                  <div className='home-blog-content'>
                    <img src={NewBlog.attachment} alt='blog not found' className='img-blog-home'/>
                    <h4 className='title-blog-home mt-4 ' data-aos="fade-down">{NewBlog.header}</h4>
                    <p className='pref-blog-home'  data-aos="fade-up">{NewBlog.brif}</p>
                     <Link to={`/Blogs/${NewBlog._id}`} className="btn btn-info btn-blog-home">{t('home.DoctorBtnReadMore')} </Link>
                        {/* <button onClick={() => handleClick(NewBlog)}>View Details</button> */}
                    
                    {/* <Route to={`/Blogs/${blog._id}`} className="btn btn-info btn-blog-home">
                      {t('home.DoctorBtnReadMore')} 
                  </Route> */}

                  {/* <button className="btn btn-info btn-blog-home" onClick={viewElement(blog._id)}></button> */}
                  </div>
                    
                </div>
            ))}
                {/* {selectedObject && (
        <Link to={`/Blogs/${selectedObject._id}`}>Go to Object Details</Link>
                )} */}
        </div>
     
        
    </Fragment>
  )
};

export default BlogsFun