const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("contact", contactSchema);
