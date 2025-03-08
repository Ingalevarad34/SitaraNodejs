const express = require("express");
const {
  addAllSongs,
  getAllSongs,
  deleteAllAllSongs,
  deleteAllSongsById
} = require("../controllers/allSongsController");

const router = express.Router();

router.post("/", addAllSongs); // Add multiple songs
router.get("/", getAllSongs);  // Get all Trending songs
router.delete("/", deleteAllAllSongs); // Delete all songs
router.delete("/:id", deleteAllSongsById); // Delete a specific song by musicId

module.exports = router;
