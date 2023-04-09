import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FaqUpdateModal from "./FaqUpdateModal";
import FaqDeleteModal from "./FaqDeleteModal";

const SingleFaq = ({ faq, index }) => {
  //update modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleOpenUpdateModal = () => setShowUpdateModal(true);

  //delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleOpenDeleteModal = () => setShowDeleteModal(true);
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        {faq.email}
        <br />
        {faq.user_question}
      </Accordion.Header>
      <Accordion.Body>
        <p>{faq.answer}</p>
        <Button variant="success" onClick={handleOpenUpdateModal}>
          إجابة / تعديل
        </Button>
        <Button variant="danger" onClick={handleOpenDeleteModal}>
          حذف
        </Button>
        <div>
          <FaqUpdateModal
            modalState={showUpdateModal}
            handleClose={handleCloseUpdateModal}
            faq={faq}
          />
          <FaqDeleteModal
            modalState={showDeleteModal}
            handleClose={handleCloseDeleteModal}
          />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default SingleFaq;
