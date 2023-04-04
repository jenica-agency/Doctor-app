const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reserveSchema = new Schema(
  {
    user_name: { type: String, required: true },
    phone_num: { type: String, required: true },
    other_phone: { type: String },
    state: { type: Boolean, default: false },
    reserve_date: { type: Date, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("reservation", reserveSchema);
