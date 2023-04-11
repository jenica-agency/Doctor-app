import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";

import DashBlogs from "../dashBlogs/DashBlogs";
import DashServices from "../dashServices/DashServices";
import DashContact from "../dashContact/DashContact";
import DashFaqs from "../dashFaqs/DashFaqs";
import DashReserve from "../dashReserve/DashReserve";
import { Fragment } from "react";
import "./mainDashboard.css";
function MainDashboard() {
  return (
    <Fragment>
      <Container className="left-tap-dash">
        <Tab.Container id="left-tabs-example" defaultActiveKey="DashBlogs">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="DashBlogs"> Blogs </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="DashServices"> Services </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="DashContact"> Contact </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="DashFaqs"> FAQs </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="DashReserve"> Reserve </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="DashBlogs">
                  <DashBlogs />
                </Tab.Pane>
                <Tab.Pane eventKey="DashServices">
                  <DashServices />
                </Tab.Pane>
                <Tab.Pane eventKey="DashContact">
                  <DashContact />
                </Tab.Pane>
                <Tab.Pane eventKey="DashFaqs">
                  <DashFaqs />
                </Tab.Pane>
                <Tab.Pane eventKey="DashReserve">
                  <DashReserve />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Fragment>
  );
}

export default MainDashboard;
