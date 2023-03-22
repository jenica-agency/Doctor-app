import React ,{Fragment} from 'react';
import './Profile.css';

// translate links 
import {useTranslation} from 'react-i18next';

function Profile() {
    const {t} = useTranslation();
  return (

    <Fragment>
        <section className='profile-header'>
          <div className='profile-doctor-container container pe-0 ps-0'>
             <div className='row '>
                 <div className='doctor-image-profile col-lg-5 col-md-5 col-sm-12'>
                    <img src={"assest/doctor.png"} alt='doctor pic not found '/>
                </div>
                <div className='doctor-pref-profile col-lg-7 col-md-7 col-sm-12 my-auto'>
                    <h3 className='doctor-profile-name'> {t('profile.DoctorProfileName')} </h3>
                    <p className='pt-3'> 
                      {t('profile.DoctorProfilePref')}
                    </p>
                </div>
               
             </div>
             <div className='space pt-5 pb-5'>
                <h3>  {t('profile.DoctorProfileSpaceTitle')}</h3> 
                <p> {t('profile.DoctorProfileSpaceDesc')} </p>
             </div>
             <div className='profile-doctor-content'>
                <div className='personal-info'>
                  <div className='w-75'>
                        <h3 className='personal-info-title'> {t('profile.DoctorProfilePersonalInfoTitle')} </h3>
                    <p className='personal-info-p'>
                        {t('profile.DoctorProfilePersonalInfoDescone')}
                    </p>
                    <p className='personal-info-p'>
                        {t('profile.DoctorProfilePersonalInfoDescTwo')}
                    </p>
                    <p className='personal-info-p'>
                        {t('profile.DoctorProfilePersonalInfoDescThree')}
                    </p>
                  </div>
                </div>
                <div className='education pt-5'>
                       <h4 className='personal-education-title text-end pe-4'> {t('profile.DoctorProfileEducationTitle')}</h4>
                      <ul>
                        <li> {t('profile.DoctorProfileEducationListOne')} </li>
                        <li> {t('profile.DoctorProfileEducationListOne')} </li>
                        <li> {t('profile.DoctorProfileEducationListOne')} </li>
                        <li> {t('profile.DoctorProfileEducationListOne')} </li>
                        <li> {t('profile.DoctorProfileEducationListOne')} </li>
                      </ul>
                </div>
                <div className='personal-experience'>
                  <div className='w-75'>
                      <h4 className='personal-education-title text-end  pt-5'> {t('profile.DoctorProfileExperienceTitle')} </h4>
                      <h5 className='personal-experience-heading'> {t('profile.DoctorProfileExperienceHeading')} </h5>
                      <p className='personal-experience-desc'>
                          {t('profile.DoctorProfileExperienceDesc')}
                      </p>
                  </div>
                </div>
                <div className='personal-Achievements'>
                    <div className='w-75'>
                        <h4 className='personal-education-title text-end pt-5'> {t('profile.DoctorProfileAchievementsTitle')} </h4>
                        <p>
                          {t('profile.DoctorProfileAchievementsPref')}
                        </p>
                        <h5>{t('profile.DoctorProfileAchievementsHeading')} </h5>
                        <p className='pt-3'>
                          {t('profile.DoctorProfileAchievementsDesc')}
                        </p>
                        <p>
                          {t('profile.DoctorProfileAchievementsDesc')}
                        </p>
                        <p>
                          {t('profile.DoctorProfileAchievementsDesc')}
                        </p>
                    </div>
                </div>
             </div>
          </div>
        </section>
    </Fragment>
  )
}

export default Profile