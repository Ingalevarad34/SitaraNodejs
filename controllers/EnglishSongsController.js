const EnglishSongs = require("../models/EnglishSongs");

// ✅ Add Multiple English Songs
exports.addEnglishSongs = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await EnglishSongs.insertMany(songsList);
    res.status(201).json({ message: "English songs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All English Songs
exports.getEnglishSongs = async (req, res) => {
  try {
    const EnglishSongs = await EnglishSongs.find();
    res.json(EnglishSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All English Songs
exports.deleteAllEnglishSongs = async (req, res) => {
  try {
    await EnglishSongs.deleteMany({});
    res.json({ message: "All English songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteEnglishSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await EnglishSongs.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
