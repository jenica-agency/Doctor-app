import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ContactUpdateModal from "./ContactUpdateModal";

const SingleContact = ({ contact, index, handleUpdate }) => {
  //update modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleOpenUpdateModal = () => setShowUpdateModal(true);

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <p>البريد الإلكتروني : {contact.email}</p>
      </Accordion.Header>
      <Accordion.Body>
        <p>اسم الزائر : {contact.user_name}</p>
        <p>رقم الهاتف : {contact.phone_num}</p>
        <p> نوع التواصل : {contact.message_type}</p>
        <p> الرسالة :</p>
        <p>{contact.message_type}</p>
        <Button
          variant="success"
          onClick={handleOpenUpdateModal}
          disabled={contact.state}
        >
          المراجعة
        </Button>
        <div>
          <ContactUpdateModal
            modalState={showUpdateModal}
            handleClose={handleCloseUpdateModal}
            handleUpdate={() => handleUpdate(contact._id)}
          />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default SingleContact;
