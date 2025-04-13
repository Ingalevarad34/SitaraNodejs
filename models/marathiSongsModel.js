const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const MarathiSongsSchema = new mongoose.Schema({
  musicId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
  musicName: { type: String, required: true },
  artistName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  audioUrl: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
MarathiSongsSchema.plugin(AutoIncrement, { inc_field: "musicId", id: "MarathiSongsCounter", start_seq: 1 });

module.exports = mongoose.model("MarathiSongs", MarathiSongsSchema);
