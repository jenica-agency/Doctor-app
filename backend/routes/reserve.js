const express = require("express");

const router = express.Router();

router.post("/", createReservation);
router.get("/admin/", getReservations);
router.get("/admin/:id", updateReservationState);

module.exports = router;
