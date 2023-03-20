const express = require("express");

// import Rout controller functions
const {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  adminLogin,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/admin/", getAdmins);
router.get("/admin/:id", getAdmin);
router.post("/admin/", createAdmin);
router.patch("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);
router.post("/admin/login/", adminLogin);

module.exports = router;
