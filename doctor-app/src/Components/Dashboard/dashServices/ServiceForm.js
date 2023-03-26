import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./dashServices.css";
const ServiceForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="ServiceForm container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2>Add new service</h2>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Enter header of service</Form.Label>
            <Form.Control required type="text" placeholder="Service Header" />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Enter Brief describtion</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Brief describtion"
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Enter Brief describtion</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Brief describtion"
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" required />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Confirm</Button>
      </Form>
    </div>
  );
};

export default ServiceForm;
