import React, { Fragment } from 'react';
import { useState } from 'react';
import './FAQ.css';

// fontawsomn links 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown ,
         faAngleUp 
        } from '@fortawesome/free-solid-svg-icons';

function FAQLeft({newFAQ}) {

  const [Accordion, setAccordion]= useState(-1);

  function accordionToggle(index) {
    if (Accordion === index) {
      setAccordion(-1);
      return;
    } 
    setAccordion(index);
  }
  return (
    <Fragment>
      <div className='accordion-faq'>
        {newFAQ.map((FAQ, index) => (
         <button key={index} onClick={() => accordionToggle(index)} className='accordion-faq-content '>
            <div  className='row'>
              <div className='accordion-faq-heading col-10'>
                <h5 className={Accordion === index ? "active" :""}> {FAQ.user_question}</h5>
              </div>
              <span className='accordion-faq-icons col-2 '>
                {
                  Accordion === index? (
                    <>
                        <FontAwesomeIcon icon={faAngleUp} className = "arrow-faq">
                    </FontAwesomeIcon>
                    </>
                  ):(
                    <>
                      <FontAwesomeIcon icon={faAngleDown} className = "arrow-faq">
                    </FontAwesomeIcon>
                    </>
                  )
                }
              </span>
            </div>
         
            <div className='accordion-faq-answer'>
              <p className={Accordion === index ? "active" :"inactive"}>{FAQ.answer}</p>
            </div>

         </button>)
         )
        }

      </div>
    </Fragment>
  )
}

export default FAQLeft;

