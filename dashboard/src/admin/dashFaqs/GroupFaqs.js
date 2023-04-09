import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SingleFaq from "./SingleFaq";

const GroupFaqs = ({ faqs }) => {
  return (
    <Accordion>
      {faqs.map((faq, index) => {
        return <SingleFaq key={faq._id} faq={faq} index={index} />;
      })}
    </Accordion>
  );
};
export default GroupFaqs;
