const express = require("express");

// import Rout controller functions
const {
  createReservation,
  getReservations,
  updateReservationState,
} = require("../controllers/reserveController");

const router = express.Router();

router.post("/", createReservation);
router.get("/admin/", getReservations);
router.patch("/admin/:id", updateReservationState);

module.exports = router;
