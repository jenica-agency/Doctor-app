const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("admin", adminSchema);
