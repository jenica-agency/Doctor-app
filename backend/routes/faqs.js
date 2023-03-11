const express = require("express");

const router = express.Router();

router.get("/", getQuestions);
router.get("/:id", getQuestion);
router.post("/", createQuestion);
router.patch("/admin/:id", answerQuestion);
router.delete("/admin/:id", deleteQuestion);

module.exports = router;
