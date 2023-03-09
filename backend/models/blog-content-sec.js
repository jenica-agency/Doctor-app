const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogContentSecSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("blog_Content_Sec", blogContentSecSchema);
