const express = require("express");

// import Rout controller functions
const {
  getQuestions,
  getQuestion,
  createQuestion,
  answerQuestion,
  deleteQuestion,
} = require("../controllers/faqsController");

const router = express.Router();

router.get("/", getQuestions);
router.get("/:id", getQuestion);
router.post("/", createQuestion);
router.patch("/admin/:id", answerQuestion);
router.delete("/admin/:id", deleteQuestion);

module.exports = router;
