const mongoose = require("mongoose");

const getStatistics = async (req, res) => {
  try {
    res.status(200).json({ title: "Hello !" });
  } catch {
    res.status(400).json({ error: "erorrrr" });
  }
};
const name = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getStatistics };
