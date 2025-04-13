const userquery = require("../models/userqueryModel");

// ✅ Add userqueries
exports.adduserquery = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await PlayListSongs.insertMany(songsList);
    res.status(201).json({ message: "userquery added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All userquery 
exports.getuserquery = async (req, res) => {
  try {
    const userquery = await userquery.find();
    res.json(userquery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All userquery
exports.deleteAlluserquery = async (req, res) => {
  try {
    await userquery.deleteMany({});
    res.json({ message: "All userqueries deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteuserqueryById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await userquery.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
