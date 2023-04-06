import React, { Fragment } from 'react';
import './FAQFormtx.css';
// translate links 
import {useTranslation} from 'react-i18next';

function FAQFormtxt() {
      const {t} = useTranslation();
  return (
    <Fragment>
        
            <section className='FAQTxt-right-content'>
                <h4 className='FAQTxt-right-Header pb-4'>{t('LogoNavName')} </h4>
                <div className='txt'>
                    <h5> {t('FAQs.FAQFormTitle')} </h5>
                    <p className='pt-3'> {t('FAQs.FAQFormDesc')} </p>
                </div>
            </section>
    </Fragment>
  )
}

export default FAQFormtxt