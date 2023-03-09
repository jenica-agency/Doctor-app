const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    blog_category_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "blog_Category",
    },
    header: { type: String, required: true },
    brif: { type: String, required: true },
    attachment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
