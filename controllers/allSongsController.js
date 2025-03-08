const AllSongs = require("../models/allSongsModel");

// ✅ Add Multiple AllSongs Songs
exports.addAllSongs = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await AllSongs.insertMany(songsList);
    res.status(201).json({ message: "AllSongs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All AllSongs Top Songs
exports.getAllSongs = async (req, res) => {
  try {
    const allSongs = await AllSongs.find();
    res.json(allSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All AllSongs Top Songs
exports.deleteAllAllSongs = async (req, res) => {
  try {
    await AllSongs.deleteMany({});
    res.json({ message: "All AllSongs top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteAllSongsById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await AllSongs.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
