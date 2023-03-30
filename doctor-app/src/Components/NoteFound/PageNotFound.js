import React from 'react';
import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className='container-fluid'>
        <div className='row'>
            <div className='not-found col-12'>
                <h1>404</h1>
                <h3> Page Not Found </h3>
                <h5>Sorry, the page are you looking for could not be found .</h5>
                <Link to='/' className='btn btn-info btn-error'>Go To Home  </Link>
           
        </div>
        </div>
         
    </section>
   
  )
}

export default PageNotFound