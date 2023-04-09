import React, { Fragment } from 'react';
import FAQRight from './FAQRight';
import FAQLeft from './FAQLeft';
// import dataFAQ from '../Api/dataFAQ';
import './FAQ.css';
import FormFAQ from './FAQForm/FormFAQ';
import FAQLeftModel from './FAQLeftModel';
import FAQRightModel from './FAQRightModel';

function FAQs() {

    const FAQsLeft = FAQLeftModel("/faqs/");
    const FAQsRight = FAQRightModel("/faqs/");
    console.log(FAQs);

      return (
        <Fragment>
          <FormFAQ></FormFAQ>
          <div className='container faq-container'>
            <div className='row justify-content-center'>
              <div className='FAQ-right col-9' >
                  <FAQRight newFAQs={FAQsRight}>

                  </FAQRight>
              </div>
              {/* <div className='FAQ-left col-lg-6 col-md-6 col-sm-12'>
                  <FAQLeft newFAQ={FAQsLeft}>
                  </FAQLeft>
              </div> */}
            </div>
          </div>
        </Fragment>
      )
    }

export default FAQs ;

