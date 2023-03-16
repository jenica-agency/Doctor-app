const mongoose = require("mongoose");

// Import DB Model & make a DB colliction object
const Blog = require("../models/blog");
const BlogSection = require("../models/blog-content-sec");

// controller functions

///////////////////////////////////// get all Blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// get Blog
const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "That id is not valid" });
    }
    //collection object
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: "Not found that Blog" });
    }
    const blogsections = await BlogSection.find({
      blog_id: id,
    });
    res.status(200).send({ blog, blogsections });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// create Blog
const createBlog = async (req, res) => {
  const { header, brif, attachment } = req.body;
  try {
    const blog = await Blog.create({
      header,
      brif,
      attachment,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// update Blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const blog = await Blog.findByIdAndUpdate({ _id: id }, { ...req.body });
    //check if targted service is available
    if (!blog) {
      return res.status(404).json({ error: "Not found that blog" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// delete Blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const blog = await Blog.findByIdAndDelete({ _id: id });
    //check if targted service is available
    if (!blog) {
      return res.status(404).json({ error: "Not found that blog" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//////////////////////////////////////////////////////////

///////////////////////////////////// create Blog section
const createBlogSection = async (req, res) => {
  const { blog_id, header, content } = req.body;
  try {
    const blogSection = await BlogSection.create({
      blog_id,
      header,
      content,
    });
    res.status(201).json(blogSection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// update Blog
const updateBlogSection = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const blogSection = await BlogSection.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    //check if targted service is available
    if (!blogSection) {
      return res.status(404).json({ error: "Not found that blog section" });
    }
    res.status(200).json(blogSection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// delete Blog
const deleteBlogSection = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const blogSection = await BlogSection.findByIdAndDelete({ _id: id });
    //check if targted service is available
    if (!blogSection) {
      return res.status(404).json({ error: "Not found that blog section" });
    }
    res.status(200).json(blogSection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  createBlogSection,
  updateBlogSection,
  deleteBlogSection,
};
