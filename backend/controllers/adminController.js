const mongoose = require("mongoose");

// Import DB Model & make a DB colliction object
const Admin = require("../models/admin");

// controller functions

///////////////////////////////////// get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.status(200).json(admins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// get admin
const getAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "That id is not valid" });
    }
    //collection object
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ error: "Not found that admin" });
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// create admin
const createAdmin = async (req, res) => {
  const { user, password, tokens } = req.body;
  try {
    const admin = await Admin.create({
      user,
      password,
      tokens,
    });
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// update admin
const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const updates = Object.keys(req.body);
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const admin = await Admin.findById(id);
    updates.forEach((update) => (admin[update] = req.body[update]));
    await admin.save();

    // const admin = await Admin.findByIdAndUpdate({ _id: id }, { ...req.body });

    //check if targted admin is available
    if (!admin) {
      return res.status(404).json({ error: "Not found that admin" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// delete admin
const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const admin = await Admin.findByIdAndDelete({ _id: id });
    //check if targted admin is available
    if (!admin) {
      return res.status(404).json({ error: "Not found that admin" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// login
const adminLogin = async (req, res) => {
  try {
    const admin = await Admin.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  adminLogin,
};
