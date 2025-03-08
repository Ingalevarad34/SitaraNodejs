const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const artistSchema = new mongoose.Schema({
    artistId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
    artistName: { type: String, required: true },
    smallDesc: { type: String, required: true },
    imageUrl: { type: String, required: true },
    artistAlbum: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
artistSchema.plugin(AutoIncrement, { inc_field: "artistId", id: "artistCounter", start_seq: 1 });

module.exports = mongoose.model("artist", artistSchema);
