const newRelease = require("../models/newReleaseModel");

// Add
exports.addNewRelease = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await newRelease.insertMany(songsList);
    res.status(201).json({ message: "Weekly top songs added successfully"});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get 
exports.getNewRelease = async (req, res) => {
  try {
    const newReleaseSongs = await newRelease.find();
    res.json(newReleaseSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Delete 
exports.deleteAllNewRelease = async (req, res) => {
  try {
    await newRelease.deleteMany({});
    res.json({ message: "All weekly top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Delete by musicId
exports.deleteNewReleaseById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await newRelease.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
