const mongoose = require("mongoose");

//import port from env
const PORT = process.env.PORT || 4001;

// Import DB Model & make a DB colliction object
const Service = require("../models/service");

// controller functions

///////////////////////////////////// get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//"http://localhost:" + PORT + "/" +
///////////////////////////////////// create service
const createService = async (req, res) => {
  const { header, brif, content } = req.body;

  const attachment = req.file ? req.file.path : "";

  try {
    const service = await Service.create({ header, brif, content, attachment });
    res.status(201).json(service);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

///////////////////////////////////// update service
const updateService = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const service = await Service.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    //check if targted service is available
    if (!service) {
      return res.status(404).json({ error: "Not found that service" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// delete service
const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const service = await Service.findByIdAndDelete({ _id: id });
    //check if targted service is available
    if (!service) {
      return res.status(404).json({ error: "Not found that service" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// upload image for service
const uploadServiceImage = async (req, res) => {
  try {
    res.status(200).json(req.file.path);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getServices,
  createService,
  updateService,
  deleteService,
  uploadServiceImage,
};
