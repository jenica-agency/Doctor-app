/////////////////////////////////////middleware for upload images
const multer = require("multer");
const path = require("path");

const fileStorge = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/services");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + "_" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadServiceImg = multer({
  storage: fileStorge,
  limits: {
    fileSize: 1024 * 1024 * 4,
  },
  fileFilter: fileFilter,
});

module.exports = {
  uploadServiceImg,
};
