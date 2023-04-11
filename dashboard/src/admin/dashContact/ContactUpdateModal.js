import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ContactUpdateModal({ modalState, handleClose, handleUpdate }) {
  return (
    <Modal show={modalState} onHide={() => handleClose()} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>مراجعة تواصل</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>هل أنت متأكد ؟</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          إلغاء
        </Button>
        <Button variant="success" onClick={handleUpdate}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ContactUpdateModal;
