import Modal from "react-bootstrap/Modal";
import ServiceUpdateForm from "./ServiceUpdateForm";

function ServiceUpdateModal({ show, service, handleClose }) {
  return (
    <Modal show={show} onHide={() => handleClose()} centered={true} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ServiceUpdateForm service={service} />
      </Modal.Body>
    </Modal>
  );
}
export default ServiceUpdateModal;
