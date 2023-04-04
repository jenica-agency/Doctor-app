const mongoose = require("mongoose");

// Import DB Model & make a DB colliction object
const Reservation = require("../models/reserve");

// controller functions

///////////////////////////////////// get all reservations
const getReservations = async (req, res) => {
  try {
    const reservation = await Reservation.find({});
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// create reservation
const createReservation = async (req, res) => {
  const { user_name, phone_num, other_phone, state, reserve_date, message } =
    req.body;
  try {
    const reservation = await Reservation.create({
      user_name,
      phone_num,
      other_phone,
      state,
      reserve_date,
      message,
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// update reservation state
const updateReservationState = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const reservation = await Reservation.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    //check if targted service is available
    if (!reservation) {
      return res.status(404).json({ error: "Not found that reservation" });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { createReservation, getReservations, updateReservationState };
