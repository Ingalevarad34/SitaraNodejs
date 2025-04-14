const WishListSongs = require("../models/wishListModel");

// ✅ Add Multiple WishListSongs Songs
exports.addWishList = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await WishListSongs.insertMany(songsList);
    res.status(201).json({ message: "WishList songs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All WishListSongs Top Songs
exports.getWishListSongs = async (req, res) => {
  try {
    const wishListSongs = await WishListSongs.find();
    res.json(wishListSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All WishListSongs Top Songs
exports.deleteAllWishListSongs = async (req, res) => {
  try {
    await WishListSongs.deleteMany({});
    res.json({ message: "All WishList songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteWishListSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await WishListSongs.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
