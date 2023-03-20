const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const faqSchema = new Schema(
  {
    email: { type: String, required: true },
    user_question: { type: String, required: true },
    answer: { type: String },
    state: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("faq", faqSchema);
