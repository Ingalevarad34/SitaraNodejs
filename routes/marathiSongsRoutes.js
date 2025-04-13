const express = require("express");
const {
  addMarathiSongs,
  getMarathiSongs,
  deleteAllMarathiSongs,
  deleteMarathiSongsById
} = require("../controllers/weeklyTopSongsController");

const router = express.Router();

router.post("/", addMarathiSongs); // Add multiple songs
router.get("/", getMarathiSongs);  // Get all weekly top songs
router.delete("/",deleteAllMarathiSongs,); // Delete all songs
router.delete("/:id", deleteMarathiSongsById); // Delete a specific song by musicId

module.exports = router;
