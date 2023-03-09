const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const faqSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("faq", faqSchema);
