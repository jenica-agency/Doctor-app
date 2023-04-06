import React from 'react'
// import dataServices from '../Api/dataServices';
import ServicesFun from './ServicesFun';
import ServicesModel from './ServicesModal';

function Services() {

   const {services, isWaiting} = ServicesModel("/allservices/");
  return (
    <section className='services-section'>
      <div className='container mt-5 blog'>
        <ServicesFun newService ={services}>
        </ServicesFun>
         {isWaiting && <h1> please wait loading data ..... </h1>}
    </div>
    </section>
     
  )
}

export default Services