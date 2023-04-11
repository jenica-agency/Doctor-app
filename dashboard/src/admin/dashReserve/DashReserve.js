import React from "react";
import { useEffect, useState } from "react";
import GroupReservation from "./GroupReservation";

const DashReserve = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchAllReservation = async () => {
      const response = await fetch("/reserve/admin", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const rjson = await response.json();
      if (response.ok) {
        setReservations(rjson);
      }
    };
    fetchAllReservation();
  }, []);
  const review = reservations.filter((contact) => {
    return contact.state === true;
  });
  const notReview = reservations.filter((contact) => {
    return contact.state === false;
  });
  const handleUpdate = async (id) => {
    const response = await fetch("/reserve/admin/" + id, {
      method: "PATCH",
      body: JSON.stringify({ state: true }),
      headers: { "Content-Type": "application/json" },
    });
    // const json = await response.json();

    if (response.ok) {
      console.log("Contact was updated");
      const updatedReservations = reservations.map((reservation) => {
        if (reservation._id === id) {
          reservation.state = true;
        }
        return reservation;
      });
      setReservations(updatedReservations);
    }
  };

  return (
    <div className="dashcontact">
      <h2>مراجعة الحجز </h2>
      <h4>حجز لم يتم مراجعته</h4>
      <GroupReservation reservations={notReview} handleUpdate={handleUpdate} />
      <h4>حجز تم مراجعته</h4>
      <GroupReservation reservations={review} handleUpdate={handleUpdate} />
    </div>
  );
};

export default DashReserve;
