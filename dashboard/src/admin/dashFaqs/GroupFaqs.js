import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SingleFaq from "./SingleFaq";

const GroupFaqs = ({ faqs, handleDelete, handleSubmit, stateControl }) => {
  return (
    <Accordion>
      {faqs.map((faq, index) => {
        return (
          <SingleFaq
            key={faq._id}
            faq={faq}
            index={index}
            handleDelete={handleDelete}
            stateControl={stateControl}
          />
        );
      })}
    </Accordion>
  );
};
export default GroupFaqs;
