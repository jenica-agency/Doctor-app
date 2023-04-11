import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ReservationUpdateModal from "./ReservationUpdateModal";
import { format } from "date-fns";

const SingleReservation = ({ reservation, index, handleUpdate }) => {
  //update modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleOpenUpdateModal = () => setShowUpdateModal(true);
  const date = reservation.reserve_date.toLocaleDateString();
  console.log(date);
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <p>اسم المريض : {reservation.user_name}</p>
        <br />
        <p>تاريخ تقديم الحجز : {reservation.createdAt}</p>
      </Accordion.Header>
      <Accordion.Body>
        <p>اسم المريض : {reservation.user_name}</p>
        <p>رقم الهاتف : {reservation.phone_num}</p>
        <p> رقم الهاتف التأكيدي : {reservation.other_phone}</p>
        <p> تاريخ الحجز : {reservation.reserve_date}</p>
        <p> الرسالة :</p>
        <p>{reservation.message_type}</p>
        <Button
          variant="success"
          onClick={handleOpenUpdateModal}
          disabled={reservation.state}
        >
          المراجعة
        </Button>
        <div>
          <ReservationUpdateModal
            modalState={showUpdateModal}
            handleClose={handleCloseUpdateModal}
            handleUpdate={() => handleUpdate(reservation._id)}
          />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default SingleReservation;
