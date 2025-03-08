const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const topAlbumsSchema = new mongoose.Schema({
    artistId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
    artistName: { type: String, required: true },
    artistName: { type: String, required: true },
    smallDesc: { type: String, required: true },
    imageUrl: { type: String, required: true },
    artistAlbum: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
topAlbumsSchema.plugin(AutoIncrement, { inc_field: "artistId", id: "topAlbumsCounter", start_seq: 1 });

module.exports = mongoose.model("topAlbums", topAlbumsSchema);
