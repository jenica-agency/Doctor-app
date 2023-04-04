import React, { Fragment } from 'react';
import {  Route, Routes} from "react-router-dom";
import MainDashboard from '../main/MainDashboard';

import DashContact from "../dashContact/DashContact";
import DashFaqs from "../dashFaqs/DashFaqs";
import DashReserve from "../dashReserve/DashReserve";



function AdminRoutes() {
  return (
    <Fragment>
       
        <Routes>
            <Route path="/dashboard" element={<MainDashboard/>} />         
            <Route path="/dashboard/contact" element={<DashContact />} />
            <Route path="/dashboard/faqs" element={<DashFaqs />} />
            <Route path="/dashboard/reserve" element={<DashReserve />} />
        </Routes>

    </Fragment>
  )
}

export default AdminRoutes