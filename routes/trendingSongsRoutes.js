const express = require("express");
const {
  addTrendingSongs,
  getTrendingSongs,
  deleteAllTrendingSongs,
  deleteTrendingSongById
} = require("../controllers/trendingSongsController");

const router = express.Router();

router.post("/", addTrendingSongs); // Add multiple songs
router.get("/", getTrendingSongs);  // Get all Trending songs
router.delete("/", deleteAllTrendingSongs); // Delete all songs
router.delete("/:id", deleteTrendingSongById); // Delete a specific song by musicId

module.exports = router;
