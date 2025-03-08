const TopAlbums = require("../models/topAlbumsModel");

// ✅ Add Multiple TopAlbums Songs
exports.addTopAlbums = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await TopAlbums.insertMany(songsList);
    res.status(201).json({ message: "TopAlbums added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All TopAlbums Top Songs
exports.getTopAlbums = async (req, res) => {
  try {
    const topAlbumsSongs = await TopAlbums.find();
    res.json(topAlbumsSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All TopAlbums Top Songs
exports.deleteAllTopAlbums = async (req, res) => {
  try {
    await TopAlbums.deleteMany({});
    res.json({ message: "All TopAlbums top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteTopAlbumsById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await TopAlbums.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
