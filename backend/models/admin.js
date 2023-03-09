const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminSchema);
