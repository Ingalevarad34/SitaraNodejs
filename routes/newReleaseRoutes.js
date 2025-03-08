const express = require("express");
const {
  addNewRelease,
  getNewRelease,
  deleteAllNewRelease,
  deleteNewReleaseById
} = require("../controllers/newReleaseController");

const router = express.Router();

router.post("/", addNewRelease); // Add multiple songs
router.get("/", getNewRelease);  // Get all weekly top songs
router.delete("/", deleteAllNewRelease); // Delete all songs
router.delete("/:id", deleteNewReleaseById); // Delete a specific song by musicId

module.exports = router;
