const PlayListSongs = require("../models/playListModel");

// ✅ Add Multiple PlayListSongs Songs
exports.addPlayListSongs = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await PlayListSongs.insertMany(songsList);
    res.status(201).json({ message: "PlayListSongs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All PlayListSongs Top Songs
exports.getPlayListSongs = async (req, res) => {
  try {
    const playListSongs = await PlayListSongs.find();
    res.json(playListSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All PlayListSongs Top Songs
exports.deleteAllPlayListSongs = async (req, res) => {
  try {
    await PlayListSongs.deleteMany({});
    res.json({ message: "All PlayListSongs top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deletePlayListSongsById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await PlayListSongs.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
