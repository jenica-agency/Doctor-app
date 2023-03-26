
import React, { Fragment, Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../images/logo_thumbnail.png";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Profile from "../Profile/Profile";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Booking from "../Booking/Booking";
import FAQs from "../FAQs/FAQs";
import { Translation } from "react-i18next";
import "./Nav.css";
import SingleBlog from "./../SingleBlog/SingleBlog";
import Main from "../Dashboard/main/Main";
import DashBlogs from "../Dashboard/dashBlogs/DashBlogs";
import DashServices from "../Dashboard/dashServices/DashServices";
import DashContact from "../Dashboard/dashContact/DashContact";
import DashFaqs from "../Dashboard/dashFaqs/DashFaqs";
import DashReserve from "../Dashboard/dashReserve/DashReserve";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-content ">
            <div className="container">
              <NavLink className="navbar-brand " to="/Home">
                <img
                  src={logo}
                  alt="logo not found"
                  width="35"
                  height="25"
                ></img>
                <Translation>
                  {(t) => (
                    <span className="doctor-name">{t("LogoNavName")}</span>
                  )}
                </Translation>
              </NavLink>
              <button
                className="navbar-toggler  menu-icon"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              >
                {this.state.show ? <MenuIcon /> : <CloseIcon />}
              </button>

              <div
                className={
                  this.state.show
                    ? "collapse navbar-collapse ul-nav-content"
                    : "collapse navbar-collapse active ul-nav-content"
                }
              >
                <ul className="navbar-nav ms-auto ">
                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to="/Home" className="nav-link navbar-link">
                          {t("LiNavLinkHome")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink
                          to="/Services"
                          className="nav-link navbar-link"
                        >
                          {t("LiNavLinkServices")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to="/Profile" className="nav-link navbar-link">
                          {t("LiNavLinkProfile")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to="/Blogs" className="nav-link navbar-link">
                          {t("LiNavLinkBlogs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to="/FAQs" className="nav-link navbar-link">
                          {t("LiNavLinkFAQs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to="/Contact" className="nav-link navbar-link">
                          {t("LiNavLinkContactUs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>


                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to="/Booking" className="nav-link navbar-link">
                          {t("LiNavLinkBooking")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>
                </ul>
              </div>
            </div>
          </nav>
        </Fragment>
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
          <Route path="/dashboard" element={<Main />} />
          <Route path="/dashboard/blogs" element={<DashBlogs />} />
          <Route path="/dashboard/services" element={<DashServices />} />
          <Route path="/dashboard/contact" element={<DashContact />} />
          <Route path="/dashboard/faqs" element={<DashFaqs />} />
          <Route path="/dashboard/reserve" element={<DashReserve />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
