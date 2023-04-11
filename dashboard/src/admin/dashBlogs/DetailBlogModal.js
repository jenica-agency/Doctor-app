import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

const DetailBlogModal = ({ modalState, handleClose, id }) => {
  const [singleBlog, setSingleBlog] = useState([]);
  useEffect(() => {
    //fetch single blog
    const fetchSingleBlog = async () => {
      const response = await fetch("/blogs/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const rjson = await response.json();
      if (response.ok) {
        setSingleBlog(rjson);
      }
    };
    fetchSingleBlog();
  }, [id]);
  console.log(singleBlog);
  return (
    <Modal
      show={modalState}
      onHide={() => handleClose()}
      backdrop="static"
      centered={true}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>تفاصيل المدونة</Modal.Title>
      </Modal.Header>
      <Modal.Body>{singleBlog.blog.header}</Modal.Body>
    </Modal>
  );
};

export default DetailBlogModal;
