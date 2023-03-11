import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Fragment } from'react';
import doctor from '../../images/doctor.png';
import {useTranslation} from 'react-i18next';
import './Home.css';


function Home() {
  const {t} = useTranslation();
  return (
    <Fragment>
      <section className='home-hero'>
         <div className="custom-shape-divider-bottom-1678534839">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
              </div>
          <div className='home-slide'>
              <div className='container row m-auto cover-content-home'>
                  <div className='cover-left col-lg-6 col-md-6 col-sm-12 '>
                      <img src={doctor} alt='doctor'  className='doctor-image'/>
                  </div>
                  <div className='cover-right col-lg-6 col-md-6 col-sm-12  content-home'>
                    <h2 className='title-cover-home'>{t('TitleCoverHome')}</h2>
                    <p className='p-cover-home'> {t('ContentHomeParagraph')}</p>
                    <h3 className='pt-3 doctor-name-cover-home'> {t('DoctorNameCoverHome')}</h3>
                  </div>
              </div>
          </div>
          
      </section>
    </Fragment>
  )
}

export default Home;