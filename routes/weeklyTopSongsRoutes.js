const express = require("express");
const {
  addWeeklyTopSongs,
  getWeeklyTopSongs,
  deleteAllWeeklyTopSongs,
  deleteWeeklyTopSongById
} = require("../controllers/weeklyTopSongsController");

const router = express.Router();

router.post("/", addWeeklyTopSongs); // Add multiple songs
router.get("/", getWeeklyTopSongs);  // Get all weekly top songs
router.delete("/", deleteAllWeeklyTopSongs); // Delete all songs
router.delete("/:id", deleteWeeklyTopSongById); // Delete a specific song by musicId

module.exports = router;
