import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SingleContact from "./SingleContact";

const GroupContacts = ({ contacts, handleUpdate }) => {
  return (
    <Accordion>
      {contacts.map((contact, index) => {
        return (
          <SingleContact
            key={contact._id}
            contact={contact}
            index={index}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </Accordion>
  );
};
export default GroupContacts;
