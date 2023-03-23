import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faGraduationCap,
        faSuitcaseMedical,
        faCheck,
        faHouseChimneyMedical,
        faUsers,
        faStarOfLife
      } 
        from '@fortawesome/free-solid-svg-icons';

import {useTranslation} from 'react-i18next';
import './Positive.css';

function Positive() {

     const {t} = useTranslation();

  return (
    <Fragment>
        <section className='positive container'>
            <h4 className='positive-heading mb-4 pe-5'> {t('Positive.PositiveHeading')} </h4>
            <div className='row pt-3'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='row positive-content'>
                        <div className='col-9'>
                            <h5 className='text-positive-head'>  {t('Positive.PositiveTeamHeader')} </h5>
                            <p > {t('Positive.PositiveTeamPref')} </p>
                        </div>
                        <div className='col-3 my-auto icon-positive'>
                            <FontAwesomeIcon icon={faGraduationCap} className = "team-icon-positive ">
                            </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
                 <div className='col-lg-4 col-md-4 col-sm-12'>
                   <div className='row positive-content'>
                        <div className='col-9'>
                            <h5 className='text-positive-head'> {t('Positive.PositiveDoctorHeader')} </h5>
                            <p > {t('Positive.PositiveDoctorPref')} </p>
                        </div>
                        <div className='col-3 my-auto icon-positive'>
                            <FontAwesomeIcon icon={faCheck} className = "team-icon-positive ">
                        </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
                 <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='row positive-content'>
                        <div className='col-9'>
                             <h5 className='text-positive-head'> {t('Positive.PositiveTreatmentHeader')} </h5>
                            <p > {t('Positive.PositiveTreatmentPref')} </p>
                        </div>
                        <div className='col-3 my-auto icon-positive'>
                            <FontAwesomeIcon icon={faSuitcaseMedical} className = "team-icon-positive ">
                        </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className='row pt-5'>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='row'>
                        <div className='col-9'>
                            <h5 className='text-positive-head'>  {t('Positive.PositiveMachinesHeader')} </h5>
                            <p > {t('Positive.PositiveMachinesPref')} </p>
                        </div>
                        <div className='col-3 my-auto icon-positive'>
                            <FontAwesomeIcon icon={faStarOfLife} className = "team-icon-positive ">
                            </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
                 <div className='col-lg-4 col-md-4 col-sm-12'>
                   <div className='row'>
                        <div className='col-9'>
                            <h5 className='text-positive-head'> {t('Positive.PositiveChildHeader')} </h5>
                            <p > {t('Positive.PositiveChildPref')} </p>
                        </div>
                        <div className='col-3 my-auto icon-positive'>
                            <FontAwesomeIcon icon={faUsers} className = "team-icon-positive ">
                        </FontAwesomeIcon>
                        </div>                        
                    </div>
                </div>
                 <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='row'>
                        <div className='col-9'>
                             <h5 className='text-positive-head'> {t('Positive.PositiveClinicHeader')} </h5>
                            <p > {t('Positive.PositiveClinicPref')} </p>
                        </div>
                        <div className='col-3 my-auto icon-positive'>
                            <FontAwesomeIcon icon={faHouseChimneyMedical} className = "team-icon-positive ">
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