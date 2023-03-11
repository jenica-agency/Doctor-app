const mongoose = require("mongoose");

const getStatistics = async (req, res) => {
  try {
    res.status(200).json({ title: "Hello !" });
  } catch {
    res.status(400).json({ error: "erorrrr" });
  }
};

module.exports = { getStatistics };
