import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faGraduationCap
      } 
        from '@fortawesome/free-solid-svg-icons';

import {useTranslation} from 'react-i18next';
import './Positive.css';

function Positive() {

     const {t} = useTranslation();

  return (
    <Fragment>
        <section className='positive container'>
            <h4> {t('Positive.PositiveHeading')} </h4>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <h5>  {t('Positive.PositiveHeading')} </h5>
                    <div className='row'>
                        <div className='col-9'>
                            <p > {t('Positive.PositiveHeading')} </p>
                        </div>
                        <div className='col-3'>
                            <FontAwesomeIcon icon={faGraduationCap} className = "team-icon-positive ">
                        </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
                 <div className='col-lg-4 col-md-4 col-sm-12'>
                    <h5> {t('Positive.PositiveHeading')} </h5>
                   <div className='row'>
                        <div className='col-9'>
                            <p > {t('Positive.PositiveHeading')} </p>
                        </div>
                        <div className='col-3'>
                            <FontAwesomeIcon icon={faGraduationCap} className = "team-icon-positive ">
                        </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
                 <div className='col-lg-4 col-md-4 col-sm-12'>
                    <h5> {t('Positive.PositiveHeading')} </h5>
                    <div className='row'>
                        <div className='col-9'>
                            <p > {t('Positive.PositiveHeading')} </p>
                        </div>
                        <div className='col-3'>
                            <FontAwesomeIcon icon={faGraduationCap} className = "team-icon-positive ">
                        </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Positive