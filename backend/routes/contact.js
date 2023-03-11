const express = require("express");

const router = express.Router();

router.post("/", sendMessage);
router.get("/admin/", getMessages);
router.patch("/admin/:id", updateMessageState);

module.exports = router;
