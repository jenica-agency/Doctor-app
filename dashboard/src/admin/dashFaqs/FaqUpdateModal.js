import Modal from "react-bootstrap/Modal";
import React from "react";

function FaqUpdateModal({ modalState, handleClose, faq }) {
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
        {faq.email}
      </Modal.Body>
    </Modal>
  );
}
export default FaqUpdateModal;
