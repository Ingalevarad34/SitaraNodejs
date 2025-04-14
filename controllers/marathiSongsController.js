const MarathiSongs = require("../models/marathiSongsModel");

// ✅ Add Multiple Marathi Songs
exports.addMarathiSongs = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await MarathiSongs.insertMany(songsList);
    res.status(201).json({ message: "Marathi songs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Marathi Songs
exports.getMarathiSongs = async (req, res) => {
  try {
    const marathiSongs = await MarathiSongs.find();
    res.json(marathiSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All Marathi Songs
exports.deleteAllMarathiSongs = async (req, res) => {
  try {
    await MarathiSongs.deleteMany({});
    res.json({ message: "All Marathi songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteMarathiSongsById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await MarathiSongs.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
