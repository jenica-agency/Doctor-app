import React,{Fragment} from 'react';
import {  Route, Routes} from "react-router-dom";

import Home from "../Home/Home";
import Services from "../Services/Services";
import Profile from "../Profile/Profile";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Booking from "../Booking/Booking";
import FAQs from "../FAQs/FAQs";
import SingleBlog from "../SingleBlog/SingleBlog";

import DashBlogs from "../Dashboard/dashBlogs/DashBlogs";
import DashServices from "../Dashboard/dashServices/DashServices";
import DashContact from "../Dashboard/dashContact/DashContact";
import DashFaqs from "../Dashboard/dashFaqs/DashFaqs";
import DashReserve from "../Dashboard/dashReserve/DashReserve";
import ScrollToTop from '../ScrollToTop/ScrollToTop';



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
          <Route path="/Blogs/:id" element={<SingleBlog />} />
         
          <Route path="/dashboard/blogs" element={<DashBlogs />} />
          <Route path="/dashboard/services" element={<DashServices />} />
          <Route path="/dashboard/contact" element={<DashContact />} />
          <Route path="/dashboard/faqs" element={<DashFaqs />} />
          <Route path="/dashboard/reserve" element={<DashReserve />} />
        </Routes>
    </Fragment>
  
  
  )
}

export default MainRoute;

// import React, { Component, Fragment } from 'react';
// // import { Container } from 'bootstrap-4-react';

// import {HashRouter, Route, Routes} from 'react-router-dom';


// import Home from '../Home/Home';
// import Services from "../Services/Services";
// import Profile from "../Profile/Profile";
// import Blogs from "../Blogs/Blogs";
// import Contact from "../Contact/Contact";
// import Booking from "../Booking/Booking";
// import FAQs from "../FAQs/FAQs";
// import SingleBlog from "../SingleBlog/SingleBlog";
// import Main from "../Dashboard/main/MainDashboard";
// import DashBlogs from "../Dashboard/dashBlogs/DashBlogs";
// import DashServices from "../Dashboard/dashServices/DashServices";
// import DashContact from "../Dashboard/dashContact/DashContact";
// import DashFaqs from "../Dashboard/dashFaqs/DashFaqs";
// import DashReserve from "../Dashboard/dashReserve/DashReserve";
// // import MainRoute from './MainRoute';



// export default class MainRoute extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Router>
//           <Routes>
//             <Route exact path="/" component={Home}/>
//             <Route exact path="/Services" component={Services}/>
//             <Route exact path="/Profile" component={Profile}/>
//             <Route exact path="/Blogs" component={Blogs}/>
//           </Routes>
//         </Router>
//       </Fragment>
//     )
//   }
// }
