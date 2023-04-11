
import React, { Fragment, Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../images/logo-doctor.png";
import {  NavLink } from "react-router-dom";

import { Translation } from "react-i18next";
import "./Nav.css";



export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
    <Fragment>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light nav-content ">
            <div className="container">
              <NavLink className="navbar-brand " to="#/Home"
                    style={({ isActive }) => ({
                          color: isActive ? "#d16fac" : '#6e4498',
                        })}
                  >
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
                        <NavLink 
                            to="/Home" 
                            className="nav-link navbar-link"
                            style={({ isActive }) => ({
                              color: isActive ? "#d16fac" : '#6e4498',
                            })}
                          >
                          {t("LiNavLinkHome")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink
                          to= "/Services"
                          className="nav-link navbar-link"
                          style={({ isActive }) => ({
                          color: isActive ? "#d16fac" : '#6e4498',
                          })}
                        >
                          {t("LiNavLinkServices")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink 
                            to= "/Profile"
                            className="nav-link navbar-link"
                            style={({ isActive }) => ({
                              color: isActive ? "#d16fac" : '#6e4498',
                            })}
                         >
                            {t("LiNavLinkProfile")}
                             
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink 
                          to= "/Blogs" 
                          className="nav-link navbar-link"
                          style={({ isActive }) => ({
                          color: isActive ? "#d16fac" : '#6e4498',
                          })}
                          >
                           {t("LiNavLinkBlogs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink 
                          to= "/FAQs"
                           className="nav-link navbar-link"
                           style={({ isActive }) => ({
                              color: isActive ? "#d16fac" : '#6e4498',
                            })}
                            >
                          {t("LiNavLinkFAQs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink 
                        to="/Contact" 
                        className="nav-link navbar-link"
                        style={({ isActive }) => ({
                              color: isActive ? "#d16fac" : '#6e4498',
                            })}>
                          {t("LiNavLinkContactUs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>


                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink 
                          to="/Booking" 
                          className="nav-link navbar-link"
                          style={({ isActive }) => ({
                              color: isActive ? "#d16fac" : '#6e4498',
                            })}
                            >
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
    );
  }
}
