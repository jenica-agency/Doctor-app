import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function FaqDeleteModal({
  modalState,
  handleClose,
  handleDelete,
  id,
  stateControl,
}) {
  return (
    <Modal show={modalState} onHide={() => handleClose()} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>حذف سؤال</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>هل أنت متأكد ؟</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          إلغاء
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleDelete(id);
          }}
        >
          حذف
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default FaqDeleteModal;
