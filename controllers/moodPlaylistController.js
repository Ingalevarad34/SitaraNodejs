const MoodPlaylist = require("../models/moodPlaylistModel");

// ✅ Add Multiple MoodPlaylist Songs
exports.addMoodPlaylist = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await MoodPlaylist.insertMany(songsList);
    res.status(201).json({ message: "MoodPlaylist added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All MoodPlaylist Top Songs
exports.getMoodPlaylist = async (req, res) => {
  try {
    const moodPlaylistSongs = await MoodPlaylist.find();
    res.json(moodPlaylistSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All MoodPlaylist Top Songs
exports.deleteAllMoodPlaylist = async (req, res) => {
  try {
    await MoodPlaylist.deleteMany({});
    res.json({ message: "All MoodPlaylist top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteMoodPlaylistById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await MoodPlaylist.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
