const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogContentSecSchema = new Schema(
  {
    blog_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "blog",
    },
    header: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog_Content_Sec", blogContentSecSchema);
