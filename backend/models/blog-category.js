const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogCategorySchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("blog_Category", blogCategorySchema);
