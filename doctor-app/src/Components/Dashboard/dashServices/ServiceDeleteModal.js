import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ServiceDeleteModal({ showDelete, handleDelete, handleDeleteClose }) {
  return (
    <Modal show={showDelete} onHide={() => handleDeleteClose()} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleDeleteClose()}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleDelete();
            handleDeleteClose();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ServiceDeleteModal;
