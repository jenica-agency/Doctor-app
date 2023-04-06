import React, { Fragment } from 'react'
import FAQFormtxt from './FormRight/FAQFormtxt';
import FormFAQLeft from './FormLeft/FormFAQLeft';
import './FormFAQ.css';

function FormFAQ() {
  return (
    <Fragment>
        <section className='Form-faqs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <FAQFormtxt></FAQFormtxt>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <FormFAQLeft></FormFAQLeft>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default FormFAQ