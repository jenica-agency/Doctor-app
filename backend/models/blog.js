const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("blog", blogSchema);
