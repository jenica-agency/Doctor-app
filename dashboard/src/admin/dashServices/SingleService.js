import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import "./dashServices.css";
import ServiceUpdateModal from "./ServiceUpdateModal";
import ServiceDeleteModal from "./ServiceDeleteModal";

const SingleService = ({
  service,
  handleDeleteRerender,
  handleUpdateRerender,
}) => {
  const handleDelete = async () => {
    const response = await fetch("/allservices/admin/" + service._id, {
      method: "DELETE",
    });
    // const json = await response.json();

    if (response.ok) {
      console.log("the service was deleted");
      handleDeleteRerender(service._id);
    }
  };

  //update modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //delete modal
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  return (
    <div>
      <Card className="card" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={service.attachment} alt="service image" />
        <Card.Body>
          <Card.Title>{service.header}</Card.Title>
          <Card.Text>{service.brif}</Card.Text>
          <Button variant="success" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDeleteShow}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <ServiceUpdateModal
        show={show}
        service={service}
        handleClose={handleClose}
        handleUpdateRerender={handleUpdateRerender}
      />
      <ServiceDeleteModal
        showDelete={showDelete}
        handleDelete={handleDelete}
        handleDeleteClose={handleDeleteClose}
      />
    </div>
  );
};

export default SingleService;
