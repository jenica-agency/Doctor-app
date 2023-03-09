const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reserveSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("reserve", reserveSchema);
