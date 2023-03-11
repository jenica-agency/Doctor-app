const express = require("express");

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);

router.post("/admin/", createBlog);
router.patch("/admin/:id", updateBlog);
router.delete("/admin/:id", deleteBlog);

router.post("/admin/categories/", createCategory);
router.get("/admin/categories/", getCategories);
router.patch("/admin/categories/:id", updateCategoryName);

module.exports = router;
