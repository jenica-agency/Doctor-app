import React from 'react';
import { Fragment } from'react';
import './Home.css';
import { Link } from 'react-router-dom';

// bootstrap links 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// fontawsomn links 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faSquarePhoneFlip,
        faEnvelope,
        faClock,
        faLocationDot,
        faQuoteLeft,
        faChildDress,
        faPerson,
        faPersonBreastfeeding
      } 
        from '@fortawesome/free-solid-svg-icons';

// image 


// translate links 
import {useTranslation} from 'react-i18next';
// page 
import BlogsFun from '../Blogs/BlogsFun';

// type write 
import TypeWriterEffect from 'react-typewriter-effect';

// data
import dataBlog from '../Api/dataBlogs';
import FAQRight from './../FAQs/FAQRight';
import dataFAQ from '../Api/dataFAQ';
import Positive from '../Positive/Positive';
import BookingRight from '../BookingRight/BookingRight';
import BookingLeft from '../BookingLeft/BookingLeft';

// animation 
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Home() {
  const {t} = useTranslation();
  const Blogs = dataBlog;
  const FAQs = dataFAQ;

    // console.log(FAQs);
 
    // console.log(Blogs);

    useEffect(()=>{
      Aos.init({
        duration:1500
      });
    }, []);
  return (
    <Fragment>
     
      {/* cover section in home  */}
      <section className='home-hero'>
         <div className="custom-shape-divider-bottom-1678534839">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
              </div>
          <div className='home-slide'>
              <div className='container row m-auto cover-content-home'>
                  <div className='cover-left col-lg-6 col-md-6 col-sm-12 '>
                      <img src={"assest/doctor.png"} alt='doctor'  className='doctor-image'/>
                  </div>
                  <div className='cover-right col-lg-6 col-md-6 col-sm-12  content-home'>
                    <h2 className='title-cover-home'>{t('home.TitleCoverHome')}</h2>
                    {/* <p className='p-cover-home'> {t('home.ContentHomeParagraph')}</p> */}

                    <TypeWriterEffect
                        textStyle={{
                          fontFamily: 'Red Hat Display',
                          color: 'var(--light-color)',
                          fontWeight: 500,
                          fontSize: '1.5em',
                          direction: 'rtl'
                        }}
                        startDelay={100}
                        cursorColor="var(--light-color)"
                        multiText={[
                          t('home.ContentHomeParagraph'),
                          t('home.ContentHomeParagraph'),
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                      />
                    <h3 className='pt-3 doctor-name-cover-home'> {t('home.DoctorNameCoverHome')}</h3>
                  </div>
              </div>
          </div>
      </section>
      {/* contact info in home  */}
      <section className='home-contact-info  mb-4' >
        <div className='container'>
          <div className='row'>

            <div className='col-lg-3 col-md-6 col-sm-12 phone-home'>
              <div className='row'>
                
                <div className='text-home col-9 text-end pe-0'>
                  <span> (+ 02) - 01298745621</span>
                </div>
                <div className='icon-home col-3 text-start'>
                    <FontAwesomeIcon icon={faSquarePhoneFlip} className = "phone-icon-home">
                    </FontAwesomeIcon>
                </div>
                <p>
                  0125623987452 - 013456203648
                </p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12 calender-home'>
              <div className='row'>
                
                <div className='text-home col-9 text-end pe-0'>
                  <span>  {t('home.CalenderHomeTitle')} </span>
                </div>
                <div className='icon-home col-3 text-start'>
                    <FontAwesomeIcon icon={faClock} className = "calender-icon-home">
                    </FontAwesomeIcon>
                </div>
                <p>
                  {t('home.CalenderHomeSpan')}
                </p>
              </div>
            </div >

            <div className='col-lg-3 col-md-6 col-sm-12 email-home'>
                <div className='row'>
                <div className='text-home col-9 text-end pe-0'>
                  <span> {t('home.EmailHomeTitle')} </span>
                </div>
                <div className='icon-home col-3 text-start'>
                    <FontAwesomeIcon icon={faEnvelope} className = "email-icon-home">
                    </FontAwesomeIcon>
                </div>
                <p>
                  infoEmail @ Email.com
                </p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12 address-home'>
                <div className='row'>
                <div className='text-home col-9 text-end pe-0'>
                  <span>{t('home.AddressHomeTitle')} </span>
                </div>
                <div className='icon-home col-3 text-start'>
                    <FontAwesomeIcon icon={faLocationDot} className = "address-icon-home">
                    </FontAwesomeIcon>
                </div>
                <p>
                  {t('home.AddressHomeSpan')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
       
      {/* info about doctor  */}
      <section className='home-doctor-info'>
        <div className='container'>
          <div className='row'>
              <div className='doctor-cote-left col-lg-5 col-md-5 col-sm-12' data-aos="fade-left">
                <p className='p-doctor-cote' data-aos="fade-left">
                {t('home.CoteHomeInfo')}
                </p>
                 <FontAwesomeIcon icon={faQuoteLeft} className = "cote-icon-home-info" >
                    </FontAwesomeIcon>
              </div>
              <div className='doctor-info-right col-lg-7 col-md-7 col-sm-12' data-aos="fade-right">
                  <h3 data-aos="fade-right"> {t('home.DoctorTitleInfo')} </h3>
                  <h3 data-aos="fade-right">{t('home.DoctorNameInfo')}  </h3>
                  <p className='mt-3' data-aos="fade-right">
                    {t('home.DoctorPrefInfo')}
                  </p>
                  <Link to={"/Profile"} className="btn btn-info btn-doctor-info" data-aos="fade-right">
                    {t('home.DoctorBtnReadMore')} 
                  </Link>
              </div>
          </div>
        </div>
      </section>
      {/* blog section home  */}
      <section className='home-doctor-Blog '>
        <div className='container'>
           <BlogsFun newBlogs={Blogs}></BlogsFun>
        </div>
      </section>
      {/* reviews section home  */}
       <section className='home-doctor-reviews'>
        <div className='container'>
          <div className='row'>
             
             <div className='col-lg-4 col-md-4 col-sm-12 home-review'>
               <FontAwesomeIcon icon={faPerson} className = "user-icon-home" data-aos="fade-right">
                    </FontAwesomeIcon>
                <h3 data-aos="fade-right">5000</h3>
                <h4 data-aos="fade-right"> {t('home.MailHomeIcon')} </h4>
                <p data-aos="fade-right"> {t('home.MailHomeDesc')} </p>
             </div>

             <div className='col-lg-4 col-md-4 col-sm-12 home-review'>
                <FontAwesomeIcon icon={faChildDress} className = "user-icon-home" data-aos="zoom-in">
                    </FontAwesomeIcon>
                <h3  data-aos="zoom-in">9000</h3>
                <h4 data-aos="zoom-in"> {t('home.FemaleHomeIcon')} </h4>
                <p data-aos="zoom-in"> {t('home.FemaleHomeDesc')} </p>
             </div>

             <div className='col-lg-4 col-md-4 col-sm-12 home-review'>
                <FontAwesomeIcon icon={faPersonBreastfeeding} className = "user-icon-home" data-aos="fade-left">
                    </FontAwesomeIcon>
                <h3 data-aos="fade-left">10000</h3>
                <h4 data-aos="fade-left"> {t('home.MotherHomeIcon')} </h4>
                <p data-aos="fade-left"> {t('home.MotherHomeDesc')} </p>
             </div>
          </div>
        </div>
       </section>
       {/* FAQ section home  */}
       <section className='home-doctor-faq'>
        <div className='container'>
          <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <h4 className='title-faq'> {t('home.FaqTitle')} </h4>
                <p className='p-faq'> {t('home.FaqParagraph')} </p>
                <Link to={"/FAQs"} className="btn btn-info btn-doctor-info btn-doctor-faq">
                    {t('home.DoctorBtnReadMore')} 
                </Link>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <FAQRight newFAQs={FAQs}></FAQRight>
              </div>
          </div>
        </div>
      </section>
       {/* positive section home  */}
        <section className='home-doctor-positive'>
            <section className='positive container'>
                <Positive> </Positive>
            </section>
        </section>
        {/* Booking section home  */}
        <section className='home-doctor-booking'>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                   <BookingRight></BookingRight>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 my-auto'>
                  <BookingLeft></BookingLeft>
                </div>
            </div>
                
          </div>
        </section>
    </Fragment>
  )
}

export default Home;