import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SingleReservation from "./SingleReservation";

const GroupReservation = ({ reservations, handleUpdate }) => {
  return (
    <Accordion>
      {reservations.map((reservation, index) => {
        return (
          <SingleReservation
            key={reservation._id}
            reservation={reservation}
            index={index}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </Accordion>
  );
};
export default GroupReservation;
