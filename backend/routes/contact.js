const express = require("express");

// import Rout controller functions
const {
  sendMessage,
  getMessages,
  updateMessageState,
} = require("../controllers/contactController");

const router = express.Router();

router.post("/", sendMessage);
router.get("/admin/", getMessages);
router.patch("/admin/:id", updateMessageState);

module.exports = router;
