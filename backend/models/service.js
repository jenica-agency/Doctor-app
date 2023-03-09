const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("service", serviceSchema);
