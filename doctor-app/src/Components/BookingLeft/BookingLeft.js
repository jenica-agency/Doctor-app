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


const Register_URL = "localhost:6000/contact/";
function BookingLeft() {
      const { t } = useTranslation();

    // all variable use in register form ( information about new user )
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

 

  const [phone, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [anotherPhone, setAnotherPhone] = useState("");
  const [anotherPhoneFocus, setAnotherPhoneFocus] = useState(false);

  const [selectedDate, setSelectedDate]= useState(null);

  const [message, setMassage] = useState("");
  const [messageFocus, setMassageFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

 

  // all function
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setValidName(User_Regex.test(user));
  }, [user]);



  useEffect(() => {
    setErrMsg("");
  }, [user]);

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = User_Regex.test(user);
 
    if (!v1 ) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        Register_URL,
        JSON.stringify({ user,  phone,  message }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(response.data);
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPhone("");
      setMassage("");
     
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
    const data = {
      userName: user,
      userPhone: phone,
      userMessage: message,
      userDate : selectedDate
    };
    console.log(data);
  };
  return (
     <Fragment>
                {success ? (
                  <section>
                    <h5> message send successfully .... </h5>
                  </section>
                ) : (
                  <section className="contact-container">
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>

                    <form onSubmit={handleSubmit} className="contact-form">
                      {/* user name  */}
                      <label htmlFor="username">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validName ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={validName || !user ? "hide" : "invalid"}
                        />
                      </label>
                      <input
                        type="text"
                        id="username"
                        placeholder={t("contact.contactFormName")}
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
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
                          userFocus && user && !validName
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
                                        value={phone}
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
                                        value={anotherPhone}
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
                            selected={selectedDate}
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
                          !validName ||  !message ? true : false
                        }
                        className="btn-booking "
                      >
                        {t("Booking.BtnBooking")}
                      </button>
                    </form>
                  </section>
                )}
              </Fragment>
  )
}

export default BookingLeft