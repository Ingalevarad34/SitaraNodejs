const MusicVideo = require("../models/musicVideoModel");

// ✅ Add Multiple MusicVideo Songs
exports.addMusicVideo = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await MusicVideo.insertMany(songsList);
    res.status(201).json({ message: "MusicVideo added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All MusicVideo Top Songs
exports.getMusicVideo = async (req, res) => {
  try {
    const musicVideo = await MusicVideo.find();
    res.json(musicVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All MusicVideo Top Songs
exports.deleteAllMusicVideo = async (req, res) => {
  try {
    await MusicVideo.deleteMany({});
    res.json({ message: "All MusicVideo top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteMusicVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await MusicVideo.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
