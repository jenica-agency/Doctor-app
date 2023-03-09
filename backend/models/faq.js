const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const faqSchema = new Schema(
  {
    email: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String },
    state: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("faq", faqSchema);
