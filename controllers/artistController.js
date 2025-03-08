const Artist = require("../models/artistModel");

// ✅ Add Multiple Artist Songs
exports.addArtist = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await Artist.insertMany(songsList);
    res.status(201).json({ message: "Artist added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Artist Top Songs
exports.getArtist = async (req, res) => {
  try {
    const ArtistSongs = await Artist.find();
    res.json(ArtistSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All Artist Top Songs
exports.deleteAllArtist = async (req, res) => {
  try {
    await Artist.deleteMany({});
    res.json({ message: "All Artist top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await Artist.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
