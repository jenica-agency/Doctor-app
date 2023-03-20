const mongoose = require("mongoose");

// Import DB Model & make a DB colliction object
const Contact = require("../models/contact");

// controller functions

///////////////////////////////////// get all reservations
const getMessages = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// create reservation
const sendMessage = async (req, res) => {
  const { user_name, email, phone_num, state, message_type, message } =
    req.body;
  try {
    const contact = await Contact.create({
      user_name,
      email,
      phone_num,
      state,
      message_type,
      message,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// update reservation state
const updateMessageState = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const contact = await Contact.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    //check if targted service is available
    if (!contact) {
      return res.status(404).json({ error: "Not found that contact" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { sendMessage, getMessages, updateMessageState };
