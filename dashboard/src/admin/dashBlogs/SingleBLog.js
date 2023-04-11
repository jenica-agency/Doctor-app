import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import DetailBlogModal from "./DetailBlogModal";

const SingleBLog = ({ blog }) => {
  //detail modal
  const [showDetailModal, setShowUpdateModal] = useState(false);
  const handleCloseDetailModal = () => setShowUpdateModal(false);
  const handleOpenDetailModal = () => setShowUpdateModal(true);

  return (
    <div>
      <Card className="card" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={blog.attachment} alt="blog image" />
        <Card.Body>
          <Card.Title>{blog.header}</Card.Title>
          <Card.Text>{blog.brif}</Card.Text>
          <Button variant="primary" onClick={handleOpenDetailModal}>
            المزيد من التفاصيل
          </Button>
        </Card.Body>
      </Card>
      <DetailBlogModal
        modalState={showDetailModal}
        handleClose={handleCloseDetailModal}
        id={blog._id}
      />
    </div>
  );
};
export default SingleBLog;
