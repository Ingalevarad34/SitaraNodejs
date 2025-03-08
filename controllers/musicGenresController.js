const MusicGenres = require("../models/musicGenresModel");

// ✅ Add Multiple MusicGenres Songs
exports.addMusicGenres = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await MusicGenres.insertMany(songsList);
    res.status(201).json({ message: "MusicGenres added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All MusicGenres Top Songs
exports.getMusicGenres = async (req, res) => {
  try {
    const musicGenres = await MusicGenres.find();
    res.json(musicGenres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All MusicGenres Top Songs
exports.deleteAllMusicGenres = async (req, res) => {
  try {
    await MusicGenres.deleteMany({});
    res.json({ message: "All MusicGenres top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteMusicGenresById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await MusicGenres.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
