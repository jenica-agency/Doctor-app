const mongoose = require("mongoose");

// Import DB Model & make a DB colliction object
const Question = require("../models/faq");

// controller functions

///////////////////////////////////// get all Questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// get Question
const getQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "That id is not valid" });
    }
    //collection object
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Not found that question" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// create Question
const createQuestion = async (req, res) => {
  const { email, user_question, answer, state } = req.body;
  try {
    const question = await Question.create({
      email,
      user_question,
      answer,
      state,
    });
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// update Question
const answerQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const question = await Question.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    //check if targted service is available
    if (!question) {
      return res.status(404).json({ error: "Not found that Question" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///////////////////////////////////// delete Question
const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    //check if request id is valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "That id is not valid" });
    }

    const question = await Question.findByIdAndDelete({ _id: id });
    //check if targted service is available
    if (!question) {
      return res.status(404).json({ error: "Not found that Question" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getQuestions,
  getQuestion,
  createQuestion,
  answerQuestion,
  deleteQuestion,
};
