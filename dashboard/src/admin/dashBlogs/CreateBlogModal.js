import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function CreateBlogModal({ modalState, handleClose }) {
  const [validated, setValidated] = useState(false);
  const [header, setHeader] = useState("");
  const [brif, setBrief] = useState("");
  const [attachment, setAttachment] = useState("");
  const [attstring, setAttstring] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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

      const newBlog = { header, brif, attachment };
      const formData = new FormData();

      formData.append("header", header);
      formData.append("brif", brif);
      formData.append("attachment", attachment);

      console.log("there is that object", newBlog);
      console.log("there is that formdata", formData);

      //Creating my API request
      const response = await fetch("/blogs/admin", {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: { "Content-Type": "application/json" },
      });

      //Get the request response from my API
      const json = await response.json();

      //Check if the request accepted or not
      if (!response.ok) {
        console.log("there is that error", response);
      }
      if (response.ok) {
        setHeader("");
        setBrief("");
        setValidated(false);
        setShowAlert(true);
        setAttachment("");
        setAttstring("");

        console.log("new blog was added", { json });
        console.log(attachment);
      }
    }
  };

  let allert = {};
  if (showAlert) {
    allert = (
      <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>جيد جدا, لقد تم إضافة المدونة</Alert.Heading>
      </Alert>
    );
  } else {
    allert = <div></div>;
  }

  return (
    <Modal
      show={modalState}
      onHide={() => {
        handleClose();
        setShowAlert(false);
      }}
      centered={true}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>إضافة مدونة</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ServiceForm ">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-3">
              <Form.Group controlId="validationCustom01">
                <Form.Label>أدخل العنوان الرئيسي</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="العنوان الرئيسي"
                  onChange={(e) => setHeader(e.target.value)}
                  value={header}
                />
                <Form.Control.Feedback>مكتمل</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  برجاء ملئ هذا الحقل
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label>أدخل الوصف التفصيلي</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="الوصف التفصيليي"
                  onChange={(e) => setBrief(e.target.value)}
                  value={brif}
                />
                <Form.Control.Feedback>مكتمل</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  برجاء ملئ هذا الحقل
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="12" controlId="validationCustom03">
                <Form.Label>إرفق صورة</Form.Label>
                <Form.Control
                  type="file"
                  filename="attachment"
                  onChange={(e) => {
                    setAttachment(e.target.files[0]);
                    setAttstring(e.target.value);
                  }}
                  value={attstring}
                />
                <Form.Control.Feedback>مكتمل</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  برجاء ملئ هذا الحقل
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <Button type="submit">تأكيد</Button>
          </Form>
          {allert}
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default CreateBlogModal;
