const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const EnglishSongsSchema = new mongoose.Schema({
  musicId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
  musicName: { type: String, required: true },
  artistName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  audioUrl: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
EnglishSongsSchema.plugin(AutoIncrement, { inc_field: "musicId", id: "EnglishSongsCounter", start_seq: 1 });

module.exports = mongoose.model("EnglishSongs", EnglishSongsSchema);
