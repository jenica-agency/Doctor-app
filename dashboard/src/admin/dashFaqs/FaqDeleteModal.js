import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function FaqDeleteModal({ modalState, handleClose }) {
  return (
    <Modal show={modalState} onHide={() => handleClose()} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          إلغاء
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleClose();
          }}
        >
          حذف
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default FaqDeleteModal;
