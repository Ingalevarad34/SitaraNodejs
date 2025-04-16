const userquery = require("../models/userqueryModel");

// ✅ Add userquery
exports.adduserquery = async (req, res) => {
  try {
    const userQuery = req.body;

    if (!userQuery.userName || !userQuery.userSuggestion) {
      return res.status(400).json({ error: "Missing userName or userSuggestion" });
    }

    const newQuery = new userquery({
      userName: userQuery.userName,
      userSuggestion: userQuery.userSuggestion,
    });

    const savedQuery = await newQuery.save();
    res.status(201).json({ message: "userquery added successfully", savedQuery });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All userqueries
exports.getuserquery = async (req, res) => {
  try {
    const UserQuery = await userquery.find();
    res.json(UserQuery);
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
