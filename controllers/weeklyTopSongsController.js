const WeeklyTopSong = require("../models/weeklyTopSongsModel");

// ✅ Add Multiple Weekly Songs
exports.addWeeklyTopSongs = async (req, res) => {
  try {
    const songsList = req.body;

    if (!Array.isArray(songsList) || songsList.length === 0) {
      return res.status(400).json({ error: "Invalid input, expected a non-empty array" });
    }

    const savedSongs = await WeeklyTopSong.insertMany(songsList);
    res.status(201).json({ message: "Weekly top songs added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Weekly Top Songs
exports.getWeeklyTopSongs = async (req, res) => {
  try {
    const weeklySongs = await WeeklyTopSong.find();
    res.json(weeklySongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete All Weekly Top Songs
exports.deleteAllWeeklyTopSongs = async (req, res) => {
  try {
    await WeeklyTopSong.deleteMany({});
    res.json({ message: "All weekly top songs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a Single Song by musicId
exports.deleteWeeklyTopSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await WeeklyTopSong.findOneAndDelete({ musicId: id });

    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
