import React, { Fragment } from 'react';
import { useState } from 'react';
import './FAQ.css';

// fontawsomn links 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown ,
         faAngleUp 
        } from '@fortawesome/free-solid-svg-icons';

function FAQRight({newFAQs}) {

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
        {newFAQs.map((FAQ, index) => (
         <div key={index} onClick={() => accordionToggle(index)}>

            <div className='accordion-faq-heading'>
              <h3 className={Accordion === index ? "active" :""}> {FAQ.question}</h3>
            </div>

            <div className='accordion-faq-icons'>
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
            </div>

            <div className='accordion-faq-answer'>
              <p className={Accordion === index ? "active" :"inactive"}>{FAQ.answer}</p>
            </div>

         </div>)
         )
        }

      </div>
    </Fragment>
  )
}

export default FAQRight;

