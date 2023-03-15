import React, { Fragment } from 'react';
import './Services.css';

const ServicesFun = ({newService}) => {
  return (
    <Fragment>
        <div className='service-content'>
            {newService && newService.map((Service) => (
                <div className=' services row' key={Service.id}>
                    <div className='col-lg-8 col-md-8 col-sm-6 service-desc'>
                        <h4 className='title-services mt-4 '>{Service.name}</h4>
                        <p className='pref-services'>{Service.description}</p>
                    </div>
                     <div className='col-lg-4 col-md-4 col-sm-6 service-img'>
                        <img src={Service.pic} alt={Service.name} className="service-icon "/>
                    </div>
                </div>
            ))}
        </div>
    </Fragment>
  )
};

export default ServicesFun