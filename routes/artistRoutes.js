const express = require("express");
const {
  addArtist,
  getArtist,
  deleteAllArtist,
  deleteArtistById
} = require("../controllers/artistController");

const router = express.Router();

router.post("/", addArtist); // Add multiple songs
router.get("/", getArtist);  // Get all Trending songs
router.delete("/", deleteAllArtist); // Delete all songs
router.delete("/:id", deleteArtistById); // Delete a specific song by musicId

module.exports = router;
