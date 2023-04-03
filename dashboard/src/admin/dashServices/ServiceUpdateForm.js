import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import "./dashServices.css";

const ServiceUpdateForm = ({ service, handleUpdateRerender }) => {
  const [validated, setValidated] = useState(false);
  const [header, setHeader] = useState(service.header);
  const [brif, setBrief] = useState(service.brif);
  const [content, setContent] = useState(service.content);
  // const [attachment, setAttachment] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  // const x = (service._id, json)=> handleUpdateRerender(service._id, json);
  const x = (id, serviceUpdate) => {
    handleUpdateRerender(service._id, serviceUpdate);
  };
  const handleSubmit = async (e) => {
    //turn on validation on cells
    setValidated(true);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      console.log("check your vaidation");
    } else {
      e.preventDefault();
      console.log("congreatulations");
      const serviceUpdate = { header, brif, content };
      console.log(serviceUpdate);

      //Creating my API request
      const response = await fetch("/allservices/admin/" + service._id, {
        method: "PATCH",
        body: JSON.stringify(serviceUpdate),
        headers: { "Content-Type": "application/json" },
      });

      //Get the request response from my API
      const json = await response.json();

      //Check if the request accepted or not
      if (!response.ok) {
        setError(response.error);
        console.log("there is that error", response);
      }
      if (response.ok) {
        setError(null);
        setHeader("");
        setBrief("");
        setContent("");
        setValidated(false);
        setShow(true);
        x(service._id, serviceUpdate);
        console.log("the service was updated", { json });
      }
    }
  };

  var allert = {};
  if (show) {
    allert = (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>The service was updated successfully.</Alert.Heading>
      </Alert>
    );
  } else {
    allert = <div></div>;
  }

  return (
    <div className="ServiceForm ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group md="12" controlId="validationCustom01">
            <Form.Label>Enter header of service</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Service Header"
              onChange={(e) => setHeader(e.target.value)}
              value={header}
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Enter Brief describtion</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Brief describtion"
              onChange={(e) => setBrief(e.target.value)}
              value={brif}
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Enter full content </Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Full content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Upload image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setAttachment(e.target.value)}
              value={attachment}
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        <Button type="submit">Confirm</Button>
      </Form>
      {allert}
    </div>
  );
};

export default ServiceUpdateForm;
