const express = require("express");
const {
  addMusicVideo,
  getMusicVideo,
  deleteAllMusicVideo,
  deleteMusicVideoById
} = require("../controllers/musicVideoController");

const router = express.Router();

router.post("/", addMusicVideo); // Add multiple songs
router.get("/", getMusicVideo);  // Get all Trending songs
router.delete("/", deleteAllMusicVideo); // Delete all songs
router.delete("/:id", deleteMusicVideoById); // Delete a specific song by musicId

module.exports = router;
