const express = require("express");

// import Rout controller functions
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  createBlogSection,
  updateBlogSection,
  deleteBlogSection,
} = require("../controllers/blogsController");

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);

router.post("/admin/", createBlog);
router.patch("/admin/:id", updateBlog);
router.delete("/admin/:id", deleteBlog);
router.post("/admin/section/", createBlogSection);
router.patch("/admin/section/:id", updateBlogSection);
router.delete("/admin/section/:id", deleteBlogSection);

module.exports = router;
