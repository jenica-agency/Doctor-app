
import React, { Fragment, Component } from "react";

import { NavLink } from "react-router-dom";

import { Translation } from "react-i18next";



export default class QuiLinks extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
  
        <Fragment>
          
                <ul className="navbar-nav text-end">
                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to={"/Home"} className="nav-link footer-link">
                          {t("LiNavLinkHome")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink
                          to={"/Services"}
                          className="nav-link footer-link"
                        >
                          {t("LiNavLinkServices")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to={"/Profile"} className="nav-link footer-link">
                          {t("LiNavLinkProfile")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to={"/Blogs"} className="nav-link footer-link">
                          {t("LiNavLinkBlogs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to={"/FAQs"} className="nav-link footer-link">
                          {t("LiNavLinkFAQs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>

                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to={"/Contact"} className="nav-link footer-link">
                          {t("LiNavLinkContactUs")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>


                  <Translation>
                    {(t) => (
                      <li className="nav-item">
                        <NavLink to={"/Booking"} className="nav-link footer-link">
                          {t("LiNavLinkBooking")}
                        </NavLink>
                      </li>
                    )}
                  </Translation>
                </ul>
        </Fragment>
      
    );
  }
}
