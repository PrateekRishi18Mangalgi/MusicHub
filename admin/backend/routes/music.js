const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadSong } = require("../controllers/music");

const router = express.Router();

// Setup Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadSong);

module.exports = router;
