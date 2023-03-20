
import React, { Fragment } from 'react'
// import { useParams } from 'react-router-dom';
import './SingleBlog.css';
// import api from '../Api/dataBlogs';

import img from '../../images/blog-imag-1.jpg'


function SingleBlog() {
    // const {id} = useParams();
    // const Blogs = api ;
    // console.log(Blogs);
  return (
    <Fragment>
        {/* <div className='mt-5'>
        SingleBlog - {id}
       </div> */}
       <section className='single-blog-header'>
        <div className='container'>
            <div className='row'>
                <div className='img-single-blog-left col-lg-5 col-md-6 col-sm-12'>
                    <img src={img} alt='blog' />
                </div>
                <div className='content-single-blog-right col-lg-7 col-md-6 col-sm-12'>
                    <h3 className='pt-5'> الدكتور  </h3>
                    <p> فريق الدكتور باسم سمير (رسام الابتسامة) يتكون من اطباء مدربين تدريبا عاليا ونقوم باستخدام أحدث التقنيات العلاجية لاستعادة صحة اسنانك بدون ألم بسرعة وسهولة. نحن فخورون بفرصة إعطائك ابتسامة أحلامك. نقوم باستخدام تكنولوجيا جديدة في زراعة الأسنان ، حيث لا تستغرق عملية زراعة الاسنان أكثر من 10 دقائق. سنقدم لك ابتسامة جديدة ستضيء حياتك ، ولا تغطي فمك مرة أخرى </p>
                </div>

            </div>
        </div>
       </section>
    </Fragment>
    
  )
}

export default SingleBlog