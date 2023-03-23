import React, { Fragment } from 'react';
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
         
        } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <Fragment>
       <footer>
          <section className='footer'>
            <div className='container'>

              <div className='row upper-footer'>

                     <div className='logo-footer col-lg-3 col-md-3 col-sm-6'>
                          <div className='row'>
                             <div className='icon-home col-9 text-end'>
                                <h5> doctor </h5>
                              </div>
                              <div className='text-home col-3 text-start pe-0'>
                                  <img src={logo}  alt='logo not found' className='logo-footer-img'/>
                              </div>
                              
                              
                          </div>
                    </div>

                    <div className='phone col-lg-3 col-md-3 col-sm-6'>
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
                    
                    <div className='mail col-lg-3 col-md-3 col-sm-6'> 
                        
                        <div className='row'>
                              <div className='text-home col-9 text-end pe-0'>
                                <span> Email </span>
                              </div>
                              <div className='icon-home col-3 text-start'>
                                  <FontAwesomeIcon icon={faEnvelope} className = "phone-icon-home">
                                  </FontAwesomeIcon>
                              </div>
                              <p>
                                info @gmail.com 
                              </p>
                          </div>
                    
                    </div>
                   
                    <div className='links col-lg-3 col-md-3 col-sm-6'>
                          
                      <FontAwesomeIcon icon={faFacebookSquare} className = "face-icon-footer">
                    </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faInstagramSquare} className = "face-icon-footer">
                    </FontAwesomeIcon> 
                    <FontAwesomeIcon icon={faTwitterSquare} className = "face-icon-footer">
                    </FontAwesomeIcon> 
                    </div>

              </div>
            
            </div>
          </section>
       </footer>
    </Fragment>
  )
}

export default Footer