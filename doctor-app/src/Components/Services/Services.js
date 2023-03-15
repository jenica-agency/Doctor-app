import React from 'react'
import dataServices from '../Api/dataServices';
import ServicesFun from './ServicesFun';

function Services() {

  const Services = dataServices;
  console.log(Services);

  return (
    <section className='services-section'>
      <div className='container mt-5 blog'>
        <ServicesFun newService ={Services}>
        </ServicesFun>
    </div>
    </section>
     
  )
}

export default Services