const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    header: { type: String, required: true },
    brif: { type: String, required: true },
    content: { type: String, required: true },
    attachment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("service", serviceSchema);
