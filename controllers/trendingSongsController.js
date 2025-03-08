const TrendingSong = require("../models/trendingSongsModel");

// ✅ Add Multiple trending Songs
exports.addTrendingSongs = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await TrendingSong.insertMany(songsList);
    res.status(201).json({ message: "trending top songs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All trending Top Songs
exports.getTrendingSongs = async (req, res) => {
  try {
    const trendingSongs = await TrendingSong.find();
    res.json(trendingSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All trending Top Songs
exports.deleteAllTrendingSongs = async (req, res) => {
  try {
    await TrendingSong.deleteMany({});
    res.json({ message: "All trending top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteTrendingSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await TrendingSong.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
