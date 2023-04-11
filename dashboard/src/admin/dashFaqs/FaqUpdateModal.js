import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FaqUpdateModal({ modalState, handleClose, faq, stateControl }) {
  const [answer, setAnswer] = useState(faq.answer || "");
  const [validated, setValidated] = useState(false);
  ///////////////////////////////
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
      const faqUpdate = { answer };
      console.log(faqUpdate);

      //Creating my API request
      const response = await fetch("/faqs/admin/" + faq._id, {
        method: "PATCH",
        body: JSON.stringify(faqUpdate),
        headers: { "Content-Type": "application/json" },
      });

      //Get the request response from my API
      const json = await response.json();

      //Check if the request accepted or not
      if (!response.ok) {
        console.log("there is that error", response);
      }
      if (response.ok) {
        setValidated(false);
        const updatedFaqs = stateControl.faqs.map((f) => {
          if (f._id === faq._id) {
            f.answer = faqUpdate.answer;
            f.state = true;
          }
          return f;
        });
        stateControl.setFaqs(updatedFaqs);
        handleClose();
        console.log("the faq was updated", { json });
      }
    }
  };

  return (
    <Modal
      show={modalState}
      onHide={() => handleClose()}
      centered={true}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>تعديل / إجابة</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>هنا فورم التعديل</h2>
        <p>{faq.question}</p>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Form.Group controlId="validationCustom01">
            <Form.Label>Enter the answer</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="FAQ Answer"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
            />
            <Form.Control.Feedback>Done!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill that field.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Confirm</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default FaqUpdateModal;
