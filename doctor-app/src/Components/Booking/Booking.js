import React, { Fragment } from "react";
import bookingImg from '../../images/booking.png';



// translate links
import { useTranslation } from "react-i18next";
import BookingLeft from "../BookingLeft/BookingLeft";



function Booking() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section className="content-page">
        <div className="container">
          <h4> {t("Booking.TitleCoverBooking")} </h4>
          <div className="row">
            <div className="contact-address col-lg-6 col-md-6 col-sm-12 text-center">
              <img src={bookingImg} alt="booking not found"/>
            </div>
            <div className="right col-lg-6 col-md-6 col-sm-12">
               <BookingLeft></BookingLeft>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Booking;
