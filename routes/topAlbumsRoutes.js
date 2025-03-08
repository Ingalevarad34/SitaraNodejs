const express = require("express");
const {
  addTopAlbums,
  getTopAlbums,
  deleteAllTopAlbums,
  deleteTopAlbumsById
} = require("../controllers/topAlbumsController");

const router = express.Router();

router.post("/", addTopAlbums); // Add multiple songs
router.get("/", getTopAlbums);  // Get all Trending songs
router.delete("/", deleteAllTopAlbums); // Delete all songs
router.delete("/:id", deleteTopAlbumsById); // Delete a specific song by musicId

module.exports = router;
