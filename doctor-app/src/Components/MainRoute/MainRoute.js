import React,{Fragment} from 'react';
import {  Route, Routes} from "react-router-dom";

import Home from "../Home/Home";
import Services from "../Services/Services";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Booking from "../Booking/Booking";
import FAQs from "../FAQs/FAQs";
import SingleBlog from "../Blogs/SingleBlog/SingleBlog";
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PageNotFound from '../NoteFound/PageNotFound';
import Blogs from '../Blogs/Blogs';

import FormFAQ from '../FAQs/FAQForm/FormFAQ';





function MainRoute() {
  return (
  
    <Fragment> 
      <ScrollToTop/>
         <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Blogs/:_id" element={<SingleBlog />} />   
         
         <Route path="FormFAQ" element={<FormFAQ></FormFAQ>} />  
          <Route path="*" element={<PageNotFound/>}/>
          
        </Routes>
    </Fragment>
  
  
  )
}

export default MainRoute;

