const express = require("express");

// import Rout controller functions
const {
  getServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/servicesController");

const router = express.Router();

// assign controller functions to them Routs

router.get("/", getServices);
router.post("/admin/", createService);
router.patch("/admin/:id", updateService);
router.delete("/admin/:id", deleteService);

module.exports = router;
