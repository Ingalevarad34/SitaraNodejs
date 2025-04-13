const express = require("express");
const {
  addEnglishSongs,
  getEnglishSongs,
  deleteAllEnglishSongs,
  deleteEnglishSongById
} = require("../controllers/EnglishSongsController");

const router = express.Router();

router.post("/", addEnglishSongs); // Add multiple songs
router.get("/", getEnglishSongs);  // Get all English songs
router.delete("/", deleteAllEnglishSongs); // Delete all songs
router.delete("/:id", deleteEnglishSongById); // Delete a specific song by musicId

module.exports = router;
