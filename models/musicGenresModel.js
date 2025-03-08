const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const musicGenreSchema = new mongoose.Schema({
    musicId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
    albumName: { type: String, required: true },
    artistName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    albumSongs: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
musicGenreSchema.plugin(AutoIncrement, { inc_field: "musicId", id: "musicGenreCounter", start_seq: 1 });

module.exports = mongoose.model("musicGenres", musicGenreSchema);
