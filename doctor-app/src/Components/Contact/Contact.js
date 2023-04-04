import React, { Fragment } from "react";
import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "../Api/axios";

// translate links
import { useTranslation } from "react-i18next";

// global variable for regex
const User_Regex = /^[a-zA\u0600-\u06FF][a-zA \u0600-\u06FF]{1,30}$/;
const Email_Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// const Register_URL = "localhost:6000/contact/";

function Contact() {
  const { t } = useTranslation();


  // all variable use in register form ( information about new user )
  const userRef = useRef();
  const errRef = useRef();

  const [user_name, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone_num, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [message, setMassage] = useState("");
  const [messageFocus, setMassageFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [message_type, setType] = useState("");

  // all function
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(User_Regex.test(user_name));
  }, [user_name]);

  useEffect(() => {
    setValidEmail(Email_Regex.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [user_name, email]);
 
  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = User_Regex.test(user_name);
    const v2 = Email_Regex.test(email);
    const form = e.currentTarget;
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
   
    try {
      const newContent = { user_name, email, phone_num, message_type, message };
      console.log(newContent);

      //Creating my API request
      const response = await fetch("/contact", {
        method: "POST",
        body: JSON.stringify(newContent),
        headers: { "Content-Type": "application/json" },
      });

      //Get the request response from my API
      const json = await response.json();

       setSuccess(true);
        setErrMsg(null);
        setUserName("");
        setPhone("");
        setMassage("");
        setType([]);
        setEmail("");
        console.log("new service was added", { json });
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
      <section className="content-page">
        <div className="container">
          <h4> {t("contact.TitleCoverContact")} </h4>
          <div className="row">
            <div className="contact-address col-lg-6 col-md-6 col-sm-12 my-5">
              <h5> {t("contact.TitleAddressContact1")} </h5>
              <p> {t("contact.contactAddressContent1")} </p>
              <h5> {t("contact.TitleAddressContact2")} </h5>
              <p> {t("contact.contactAddressContent2")} </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-sm-12">
              <Fragment>
                {/* {success ? (
                  <section>
                    <h5> message send successfully</h5>
                  </section>
                ) : ( */}
                  <section className="contact-container">
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                    {successMsg}
                    <form  onSubmit={handleSubmit} className="contact-form">
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
                        required
                        type="text"
                        id="username"
                        
                        placeholder={t("contact.contactFormName")}
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUserName(e.target.value)}
                        value={user_name}
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

                      {/* user Email  */}
                      <label htmlFor="Email">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validEmail ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={validEmail || !email ? "hide" : "invalid"}
                        />
                      </label>

                      <input
                        type="Email"
                        id="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="Emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        className="input-form-contact mb-4 input-email-contact pe-3"
                        placeholder={t("contact.contactFormEmail")}
                      />

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
                      {/* type message */}
                      <div className="row">
                        <div className="message col-4">
                          <span> {t("contact.contactFormChooseMessage")} </span>
                          <input
                            name="type"
                            type="radio"
                            value="Message"
                            color="primary"
                            onChange={(e) => setType(e.target.value)}
                          />
                        </div>
                        <div className="suggestion col-4 ">
                          <span>
                            {" "}
                            {t("contact.contactFormChooseSuggestion")}
                          </span>
                          <input
                            name="type"
                            type="radio"
                            value="suggestion"
                            color="primary"
                            onChange={(e) => setType(e.target.value)}
                          />
                        </div>
                        <div className="complaint col-4 ">
                          <span>
                            {" "}
                            {t("contact.contactFormChooseComplaint")}{" "}
                          </span>
                          <input
                            name="type"
                            type="radio"
                            value="complaint"
                            color="primary"
                            onChange={(e) => setType(e.target.value)}
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
                          !validName || !validEmail || !message ? true : false
                        }
                         className="btn-contact "
                      >
                       {t("contact.ContactFormBtn")}
                      </button>
                    </form>
                  </section>
                {/* )} */}
              </Fragment>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Contact;
