const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const allSongsSchema = new mongoose.Schema({
  musicId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
  musicName: { type: String, required: false },
  artistName: { type: String, required: false },
  imageUrl: { type: String, required: true },
  audioUrl: { type: String, required: false }
});

// ✅ Apply auto-increment with a unique counter name
allSongsSchema.plugin(AutoIncrement, { inc_field: "musicId", id: "allSongsCounter", start_seq: 1 });

module.exports = mongoose.model("allSongs", allSongsSchema);
