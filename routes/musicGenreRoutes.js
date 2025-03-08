const express = require("express");
const {
  addMusicGenres,
  getMusicGenres,
  deleteAllMusicGenres,
  deleteMusicGenresById
} = require("../controllers/musicGenresController");

const router = express.Router();

router.post("/", addMusicGenres); // Add multiple songs
router.get("/", getMusicGenres);  // Get all Trending songs
router.delete("/", deleteAllMusicGenres); // Delete all songs
router.delete("/:id", deleteMusicGenresById); // Delete a specific song by musicId

module.exports = router;
