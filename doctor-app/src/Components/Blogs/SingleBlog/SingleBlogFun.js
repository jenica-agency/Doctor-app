
import React, { Fragment,useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogModel from '../BlogsModel';

// animation 
import Aos from 'aos';
import "aos/dist/aos.css";


    const SingleBlogFun = ({url}) => {
    const {_id} = useParams();
    console.log(_id);    
    const {BlogData} = BlogModel("/blogs/"+_id);  
    console.log(BlogData);
  
    const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`http://localhost:4001/blogs/${_id}`);
      const data = await response.json();
      setBlog(data);
    };
    fetchBlog();
  }, [url]);


   useEffect(()=>{
      Aos.init({
        duration:1500
      });
    }, []);
 console.log(BlogData);
//  console.log(NewBlog.blog.header);
  return (
     <Fragment>
       {BlogData && (
                <section className='single-blog-header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='img-single-blog-left col-lg-5 col-md-6 col-sm-12'>
                                <img src={BlogData.blog.attachment} alt='sorry photo not found' className='img-blog-home'/>
                            </div>
                            <div className='content-single-blog-right col-lg-7 col-md-6 col-sm-12'>
                                <h3 className='pt-5'> {BlogData.blog.header} </h3>
                                <h5> {BlogData.blog.brif}</h5>
                                {/* <p> {NewBlog.content} </p> */}
                            </div>

                        </div>
                    </div>
                </section>
        )} 
     
  
    </Fragment>
  )
}



export default SingleBlogFun