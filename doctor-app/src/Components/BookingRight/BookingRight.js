import React, { Fragment } from 'react';
import './BookingRight.css';

// translate links 
import {useTranslation} from 'react-i18next';

function BookingRight() {

    const {t} = useTranslation();

  return (
    <Fragment>
            <h4 className='booking-right-Header pb-4'>{t('BookingRight.BookingRightHeading')} </h4>
            <section className='booking-right-content'>
                <div className='row'>
                    <div className='booking-img col-lg-6 col-md-6 col-sm-12'>
                        <img src={"assest/blog-imag-1.jpg"} className="booking-img-up"/> 
                        <img src={"assest/blog-imag-4.jpg"} className="booking-img-up"/> 
                    </div>
                    <div className='booking-text col-lg-6 col-md-6 col-sm-12 my-auto'>
                        <p >
                            {t('BookingRight.BookingRightDesc')}
                        </p>
                    </div>
                </div>
            </section>
    </Fragment>
  )
}

export default BookingRight