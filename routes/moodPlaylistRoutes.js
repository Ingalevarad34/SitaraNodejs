const express = require("express");
const {
  addMoodPlaylist,
  getMoodPlaylist,
  deleteAllMoodPlaylist,
  deleteMoodPlaylistById
} = require("../controllers/moodPlaylistController");

const router = express.Router();

router.post("/", addMoodPlaylist); // Add multiple songs
router.get("/", getMoodPlaylist);  // Get all Trending songs
router.delete("/", deleteAllMoodPlaylist); // Delete all songs
router.delete("/:id", deleteMoodPlaylistById); // Delete a specific song by musicId

module.exports = router;
