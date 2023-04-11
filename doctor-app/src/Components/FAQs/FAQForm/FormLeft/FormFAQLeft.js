import React , { Fragment } from 'react';
import './FormFaq.css';
import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// translate links
import { useTranslation } from "react-i18next";
// global variable for regex
const Email_Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function FormFAQLeft() {
    const { t } = useTranslation();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [user_question, setUser_question] = useState("");
    const [messageFocus, setMassageFocus] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
    setValidEmail(Email_Regex.test(email));
    }, [email]);

    useEffect(() => {
    setErrMsg("");
    }, [user_question, email]);
  
    // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
  
    const v1 = Email_Regex.test(email);

    const form = e.currentTarget;
    if (!v1 || !user_question) {
      setErrMsg("Invalid Entry");
      return;
    }
   
    try {
      const newQuestion = { email, user_question};
      console.log(newQuestion);

      //Creating my API request
      const response = await fetch("/faqs", {
        method: "POST",
        body: JSON.stringify(newQuestion),
        headers: { "Content-Type": "application/json" },
      });

      //Get the request response from my API
      const json = await response.json();

       setSuccess(true);
        setErrMsg(null);
        setEmail("");
        setUser_question("");
       
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
      
        className={success ? "successMsg" : "offscreen"}
        aria-live="assertive"
      >
        question send successfully
      </p>
    );
  
  } else {
    successMsg = <div></div>;
  };
 
return (
    <Fragment>
        <div className='formfaq'>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
           {successMsg}
           <form  onSubmit={handleSubmit}>
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
                       {/* user message  */}

                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        cols="30"
                        onChange={(e) => setUser_question(e.target.value)}
                        value={user_question}
                        required
                        onFocus={() => setMassageFocus(true)}
                        onBlur={() => setMassageFocus(false)}
                        placeholder={t("FAQs.FAQFormQuestion")}
                        className="input-form-contact mt-3 mb-4"
                      />

                      {/* user button  */}
                      <button
                        disabled={
                           !validEmail || !user_question ? true : false
                        }
                         className="btn-contact "
                      >
                       {t("contact.ContactFormBtn")}
                      </button>
           </form>
        </div>
    </Fragment>
  )
}

export default FormFAQLeft