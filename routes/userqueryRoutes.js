const express = require("express");
const {
  adduserquery,
  getuserquery,
  deleteAlluserquery,
  deleteuserqueryById
} = require("../controllers/userQueryController");

const router = express.Router();

router.post("/", adduserquery); // Add multiple songs
router.get("/", getuserquery);  // Get all Trending songs
router.delete("/", deleteAlluserquery); // Delete all songs
router.delete("/:id", deleteuserqueryById); // Delete a specific song by musicId

module.exports = router;
