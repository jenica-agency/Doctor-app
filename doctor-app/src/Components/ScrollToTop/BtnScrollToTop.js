import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from "react";
import './ScrollToTop.css';
function BtnScrollToTop() {
   
    const [isVisible, setIsVisible] = useState(false);


    const goTop = () => {
        window.scrollTo({
            top: 0,
            left:0,
            behavior: 'smooth',
        });
    };

      const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);


  return (
    <section className='btn-wrapper'>
        {isVisible && (
            <div className="btn-scrollTop"  onClick={goTop}>
                <FaArrowUp className='top-btn-icon'/>
            </div>
        )}
    </section>
    
  )
}

export default BtnScrollToTop