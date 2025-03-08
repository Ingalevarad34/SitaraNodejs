const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const moodPlaylistSchema = new mongoose.Schema({
  musicId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
  albumName: { type: String, required: true },
  artistName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  albumSongs: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
moodPlaylistSchema.plugin(AutoIncrement, { inc_field: "musicId", id: "moodPlaylistCounter", start_seq: 1 });

module.exports = mongoose.model("moodPlaylist", moodPlaylistSchema);
