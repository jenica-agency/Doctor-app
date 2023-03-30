import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import QuiLinks from "./QuiLinks";
import './Footer.css';


import logo from '../../images/logo_thumbnail.png';
// fontawsomn links 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,
          faInstagramSquare,
          faTwitterSquare,
        } from '@fortawesome/free-brands-svg-icons';
import {
           faSquarePhoneFlip,
           faEnvelope,
           faLocationDot
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
                                <h5> {t('Footer.FooterDoctorNameLogo')} </h5>
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
                                0125623987452 - 013456203648
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
                                InformationEmail813@gmail.com 
                              </p>
                          </div>
                    
                    </div>
                   
                    <div className='links col-lg-3 col-md-3 col-sm-6 '>
                          
                      <FontAwesomeIcon icon={faFacebookSquare} className = "face-icon-footer">
                    </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faInstagramSquare} className = "face-icon-footer">
                    </FontAwesomeIcon> 
                    <FontAwesomeIcon icon={faTwitterSquare} className = "face-icon-footer">
                    </FontAwesomeIcon> 
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
                                <FontAwesomeIcon icon={faLocationDot} className = "address-icon-home">
                                </FontAwesomeIcon>
                            </div>
                            <div className='text-home col-10 text-end pe-0'>
                               <p>
                                  {t('Footer.FooterAddressOne')}
                               </p>
                            </div>
                      </div>
                      <div className='row'>
                            <div className='icon-home col-2 text-start'>
                                <FontAwesomeIcon icon={faLocationDot} className = "address-icon-home">
                                </FontAwesomeIcon>
                            </div>
                            <div className='text-home col-10 text-end pe-0'>
                               <p>
                                  {t('Footer.FooterAddressTwo')}
                               </p>
                            </div>
                      </div>
                      <div className='row'>
                            <div className='icon-home col-2 text-start'>
                                <FontAwesomeIcon icon={faLocationDot} className = "address-icon-home">
                                </FontAwesomeIcon>
                            </div>
                            <div className='text-home col-10 text-end pe-0'>
                               <p>
                                  {t('Footer.FooterAddressThree')}
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