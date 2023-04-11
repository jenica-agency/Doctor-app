import React,{Fragment} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './BookingLeft.css';
import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../Api/axios";
import { useTranslation } from "react-i18next";
// global variable for regex
const User_Regex = /^[a-zA\u0600-\u06FF][a-zA \u0600-\u06FF]{1,30}$/;


const Register_URL = "reserve/";
function BookingLeft() {
      const { t } = useTranslation();

    // all variable use in register form ( information about new user )
  const userRef = useRef();
  const errRef = useRef();

  const [user_name, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

 

  const [phone_num, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [other_phone, setAnotherPhone] = useState("");
  const [anotherPhoneFocus, setAnotherPhoneFocus] = useState(false);

  const [reserve_date, setSelectedDate]= useState(null);

  const [message, setMassage] = useState("");
  const [messageFocus, setMassageFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);

 

  // all function
 

  useEffect(() => {
    setValidName(User_Regex.test(user_name));
  }, [user_name]);



  useEffect(() => {
    setErrMsg("");
  }, [user_name]);

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = User_Regex.test(user_name);
 
    if (!v1 ) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const newReserve = { user_name, phone_num, other_phone, reserve_date, message };
      console.log(newReserve);

      //Creating my API request
      const response = await fetch("/reserve", {
        method: "POST",
        body: JSON.stringify(newReserve),
        headers: { "Content-Type": "application/json" },
      });

 //Get the request response from my API
      const json = await response.json();

       setSuccess(true);
        setErrMsg(null);
        setUser("");
        setPhone("");
        setAnotherPhone("");
        setMassage("");
       
        console.log("reserve successfully", { json });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
      setSuccess(false);
    }
  };
    var successMsg = {};
  if (success) {
    successMsg = (
      <p
        // ref={successRef}
        className={success ? "successMsg" : "offscreen"}
        aria-live="assertive"
      >
        message send successfully
      </p>
    );
  
  } else {
    successMsg = <div></div>;
  }
 
  return (
     <Fragment>
      
                
                  <section className="contact-container">
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                     {successMsg}
                    <form onSubmit={handleSubmit} className="contact-form">
                      {/* user name  */}
                      <label htmlFor="username">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validName ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={validName || !user_name ? "hide" : "invalid"}
                        />
                      </label>
                      
                      <input
                        type="text"
                        id="username"
                        placeholder={t("contact.contactFormName")}
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user_name}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        className="input-form-contact mb-1 input-user-contact pe-3"
                      />
                      <p
                        id="uidnote"
                        className={
                          userFocus && user_name && !validName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        2 to 24 characters.
                        <br />
                        It should not contain numbers
                        <br />
                      </p>

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                 {/* user phone number  */}
                                    <input
                                        type="text"
                                        id="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone_num}
                                        required
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={() => setPhoneFocus(false)}
                                        className="input-form-contact mb-3 input-phone-contact pe-3"
                                        placeholder={t("contact.contactFormPhone")}
                                    />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                     {/* user another phone number  */}
                                    <input
                                        type="text"
                                        id="anotherPhone"
                                        onChange={(e) => setAnotherPhone(e.target.value)}
                                        value={other_phone}
                                        required
                                        onFocus={() => setAnotherPhoneFocus(true)}
                                        onBlur={() => setAnotherPhoneFocus(false)}
                                        className="input-form-contact mb-3 input-phone-contact pe-3"
                                        placeholder={t("Booking.AnotherPhone")}
                                    />
                            </div>

                        </div>
                     
                     
                     {/* user date  */}
                     <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-center my-auto'>
                            <h5> {t("Booking.ChooseDate")}</h5>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
                             <DatePicker
                            selected={reserve_date}
                            onChange={date => setSelectedDate(date)}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            className='date-input'
                           
                            />
                        </div>
                     </div>
                    
                    
                      {/* user message  */}

                      <textarea
                        name="message"
                        id="message"
                        rows="8"
                        cols="50"
                        onChange={(e) => setMassage(e.target.value)}
                        value={message}
                        required
                        onFocus={() => setMassageFocus(true)}
                        onBlur={() => setMassageFocus(false)}
                        className="input-form-contact mt-3 mb-4"
                      />

                      {/* user button  */}
                      <button
                        disabled={
                          !validName || !phone_num || !reserve_date? true : false
                        }
                        className="btn-booking "
                      >
                        {t("Booking.BtnBooking")}
                      </button>
                    </form>
                  </section>
               
              </Fragment>
  )
}

export default BookingLeft