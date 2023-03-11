const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reserveSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone_num: { type: String, required: true },
    other_phone: { type: String },
    state: { type: Boolean, required: true },
    reserve_date: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("reserve", reserveSchema);
