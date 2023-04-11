import React, { Fragment } from 'react';
import './Services.css';

const ServicesFun = ({newService}) => {
  return (
    <Fragment>
        <div className='service-content'>
            {newService && newService.map((Service) => (
                <div className=' services row' key={Service._id}>
                    <div className='col-lg-8 col-md-8 col-sm-6 text-end service-desc '>
                        <h4 className='title-services mt-3 '>{Service.header}</h4>
                        <h5 className='title-services mt-3 '>{Service.brif}</h5>
                        <p className='pref-services'>{Service.content}</p>
                    </div>
                     <div className='col-lg-4 col-md-4 col-sm-6 service-img'>
                        <img src={Service.attachment} alt={Service.header} className="service-icon "/>
                    </div>
                </div>
            ))}
        </div>
    </Fragment>
  )
};

export default ServicesFun