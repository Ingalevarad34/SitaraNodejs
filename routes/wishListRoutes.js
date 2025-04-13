const express = require("express");
const {
  addWishList,
  getWishListSongs,
  deleteAllWishListSongs,
  deleteWishListSongById
} = require("../controllers/playListController");

const router = express.Router();

router.post("/", addWishList); // Add multiple songs
router.get("/", getWishListSongs);  // Get all Trending songs
router.delete("/", deleteAllWishListSongs); // Delete all songs
router.delete("/:id", deleteWishListSongById); // Delete a specific song by musicId

module.exports = router;
