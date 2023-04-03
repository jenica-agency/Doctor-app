import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./dashServices.css";

const ServiceForm = () => {
  const [validated, setValidated] = useState(false);
  const [header, setHeader] = useState([]);
  const [brif, setBrief] = useState([]);
  const [content, setContent] = useState([]);
  const [attachment, setAttachment] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

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
      const newService = { header, brif, content };

      //Creating my API request
      const response = await fetch("/allservices/admin", {
        method: "POST",
        body: JSON.stringify(newService),
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
        console.log("new service was added", { json });
      }
    }
  };

  var allert = {};
  if (show) {
    allert = (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Congreatulations!, the service was added</Alert.Heading>
      </Alert>
    );
  } else {
    allert = <div></div>;
  }

  return (
    <div className="ServiceForm ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2>Add new service</h2>
        <div className="mb-3">
          <Form.Group controlId="validationCustom01">
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
        </div>
        <Button type="submit">Confirm</Button>
      </Form>
      {allert}
    </div>
  );
};

export default ServiceForm;
