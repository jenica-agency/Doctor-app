import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import QuiLinks from "./QuiLinks";
import './Footer.css';


import logo from '../../images/logo-doctor.png';
// fontawsomn links 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,
        } from '@fortawesome/free-brands-svg-icons';
import {
           faSquarePhoneFlip,
           faEnvelope,
           faLocationDot,
           faTicket
        } from '@fortawesome/free-solid-svg-icons'

// translate links 
import {useTranslation} from 'react-i18next';




function Footer() {
  const {t} = useTranslation();

  return (
    <Fragment>  
      
       <footer>
          <section className='footer'>
            <div className='container'>

              <div className='row upper-footer'>

                     <div className='logo-footer col-lg-3 col-md-3 col-sm-6'>
                          <div className='row'>
                            
                             <div className='text-footer-logo col-9 '>
                                <h5 className='pt-2'> {t('LogoNavName')} </h5>
                              </div>
                              <div className='icon-footer-logo col-3  pe-0'>
                                  <img src={logo}  alt='logo not found' className='logo-footer-img'/>
                              </div>
                          </div>
                    </div>

                    <div className='phone col-lg-3 col-md-3 col-sm-6'>
                        <div className='row'>
                              <div className='text-home col-9 text-end pe-0 title-upper-footer'>
                                <span> {t('Footer.FooterPhone')}</span>
                              </div>
                              <div className='icon-home col-3 text-start'>
                                  <FontAwesomeIcon icon={faSquarePhoneFlip} className = "phone-icon-footer">
                                  </FontAwesomeIcon>
                              </div>
                              <p>
                                01006989857  -  01156528242
                              </p>
                          </div>
                    </div>
                    
                    <div className='mail col-lg-3 col-md-3 col-sm-6'> 
                        
                        <div className='row'>
                              <div className='text-home col-9 text-end pe-0 title-upper-footer' >
                                <span> {t('Footer.FooterEmail')} </span>
                              </div>
                              <div className='icon-home col-3 text-start'>
                                  <FontAwesomeIcon icon={faEnvelope} className = "email-icon-footer">
                                  </FontAwesomeIcon>
                              </div>
                              <p >
                                halasalah202@gmail.com
                                Drhalasalah@info.com
                              </p>
                          </div>
                    
                    </div>
                   
                    <div className='links col-lg-3 col-md-3 col-sm-6 '>
                          
                      
                        <a href='https://www.facebook.com/DentalBay.BayElite' target='_blank'>
                          <FontAwesomeIcon icon={faFacebookSquare} className = "face-icon-footer">
                            </FontAwesomeIcon> 
                        </a>
                       <a href='https://app.vezeeta.com/zorLwrGxstHaKbA18' target='_blank'>
                          <FontAwesomeIcon icon={faTicket} className = "face-icon-footer">
                            </FontAwesomeIcon> 
                        </a>
                     
                    </div>

              </div>
              <div className='row down-footer pt-3 '>
                  <div className='col-lg-3 col-md-3 col-sm-12 pt-4'>
                        <h5 className='text-end title-down-footer pe-4'> {t('Footer.FooterInfo')} </h5>
                        <p className='text-end info-p-footer pt-2 '>
                          {t('home.DoctorPrefInfo')}
                        </p>
                        <Link to={"/Profile"} className="btn btn-info  btn-doctor-info-footer">
                            {t('home.DoctorBtnReadMore')} 
                        </Link>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12 pt-4'>
                      <h5 className='text-end pe-4 title-down-footer'> {t('Footer.FooterLinks')} </h5>
                      <QuiLinks></QuiLinks>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12 pt-4'>
                      <h5 className='text-end title-down-footer pe-4'> {t('Footer.FooterAddress')} </h5>
                      <div className='row'>
                            <div className='icon-home col-2 text-start'>
                                <FontAwesomeIcon icon={faLocationDot} className = "address-icon-footer">
                                </FontAwesomeIcon>
                            </div>
                            <div className='text-home col-10 text-end pe-0'>
                               <p>
                                  {t('Footer.FooterAddressOne')}
                               </p>
                            </div>
                      </div>
                      
                     
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                        
                  </div>
              </div>

            
            </div>
          </section>
       </footer>
    </Fragment>
  )
}

export default Footer;