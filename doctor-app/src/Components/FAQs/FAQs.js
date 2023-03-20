import React, { Fragment } from 'react';
import FAQRight from './FAQRight';
import FAQLeft from './FAQLeft';
import dataFAQ from '../Api/dataFAQ';
import './FAQ.css';

function FAQs() {

    const FAQs = dataFAQ;
    console.log(FAQs);

      return (
        <Fragment>
          <div className='container faq-container'>
            <div className='row '>
              <div className='FAQ-right col-lg-6 col-md-6 col-sm-12' >
                  <FAQRight newFAQs={FAQs}>

                  </FAQRight>
              </div>
              <div className='FAQ-left col-lg-6 col-md-6 col-sm-12'>
                  <FAQLeft newFAQs={FAQs}>
                  </FAQLeft>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }

export default FAQs ;

