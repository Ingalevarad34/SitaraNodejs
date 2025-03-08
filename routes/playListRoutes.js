const express = require("express");
const {
  addPlayListSongs,
  getPlayListSongs,
  deleteAllPlayListSongs,
  deletePlayListSongsById
} = require("../controllers/playListController");

const router = express.Router();

router.post("/", addPlayListSongs); // Add multiple songs
router.get("/", getPlayListSongs);  // Get all Trending songs
router.delete("/", deleteAllPlayListSongs); // Delete all songs
router.delete("/:id", deletePlayListSongsById); // Delete a specific song by musicId

module.exports = router;
