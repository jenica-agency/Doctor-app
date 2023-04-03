const express = require("express");

// import Rout controller functions
const {
  getServices,
  createService,
  updateService,
  deleteService,

  uploadServiceImage,
} = require("../controllers/servicesController");
const { uploadServiceImg } = require("../middlewares/uploadImagesMeddleware");

const router = express.Router();

// assign controller functions to them Routs

router.get("/", getServices);
router.post("/admin/", uploadServiceImg.single("serviceImage"), createService);
router.patch("/admin/:id", updateService);
router.delete("/admin/:id", deleteService);
router.post(
  "/admin/upload/",
  uploadServiceImg.single("serviceImage"),
  uploadServiceImage
);

module.exports = router;
