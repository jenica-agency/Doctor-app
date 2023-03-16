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


// data
import dataBlog from '../Api/dataBlogs';
// import FAQs from '../FAQs/FAQs';



function Home() {
  const {t} = useTranslation();
  const Blogs = dataBlog;
 
    console.log(Blogs);
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
                    <p className='p-cover-home'> {t('home.ContentHomeParagraph')}</p>
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
              <div className='doctor-cote-left col-lg-5 col-md-5 col-sm-12'>
                <p className='p-doctor-cote'>
                {t('home.CoteHomeInfo')}
                </p>
                 <FontAwesomeIcon icon={faQuoteLeft} className = "cote-icon-home-info">
                    </FontAwesomeIcon>
              </div>
              <div className='doctor-info-right col-lg-7 col-md-7 col-sm-12'>
                  <h3> {t('home.DoctorTitleInfo')} </h3>
                  <h3>{t('home.DoctorNameInfo')}  </h3>
                  <p className='mt-3'>
                    {t('home.DoctorPrefInfo')}
                  </p>
                  <Link to={"/Profile"} className="btn btn-info btn-doctor-info">
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
      {/* services section home  */}
       <section className='home-doctor-reviews'>
        <div className='container'>
          <div className='row'>
             
             <div className='col-lg-4 col-md-4 col-sm-12 home-review'>
               <FontAwesomeIcon icon={faPerson} className = "user-icon-home">
                    </FontAwesomeIcon>
                <h3>5000</h3>
                <h4> {t('home.MailHomeIcon')} </h4>
                <p> {t('home.MailHomeDesc')} </p>
             </div>

             <div className='col-lg-4 col-md-4 col-sm-12 home-review'>
                <FontAwesomeIcon icon={faChildDress} className = "user-icon-home">
                    </FontAwesomeIcon>
                <h3>9000</h3>
                <h4> {t('home.FemaleHomeIcon')} </h4>
                <p> {t('home.FemaleHomeDesc')} </p>
             </div>

             <div className='col-lg-4 col-md-4 col-sm-12 home-review'>
                <FontAwesomeIcon icon={faPersonBreastfeeding} className = "user-icon-home">
                    </FontAwesomeIcon>
                <h3>10000</h3>
                <h4> {t('home.MotherHomeIcon')} </h4>
                <p> {t('home.MotherHomeDesc')} </p>
             </div>
          </div>
        </div>
       </section>
       {/* FAQ section home  */}
     
       

    </Fragment>
  )
}

export default Home;