const express = require("express");

const router = express.Router();

router.get("/", getServices);
router.post("/admin/", createService);
router.patch("/admin/:id", updateService);
router.delete("/admin/:id", deleteService);

module.exports = router;
