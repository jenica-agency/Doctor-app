const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    user_name: { type: String, required: true },
    email: { type: String, required: true },
    phone_num: { type: String, required: true },
    state: { type: Boolean, default: false },
    message_type: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contact", contactSchema);
