const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const WishListSchema = new mongoose.Schema({
    playListId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
    musicName: { type: String, required: true },
    artistName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    audioUrl: { type: String, required: true }
});

// ✅ Apply auto-increment with a unique counter name
WishListSchema.plugin(AutoIncrement, { inc_field: "WishListId", id: "WishListCounter", start_seq: 1 });

module.exports = mongoose.model("WishList", WishListSchema);
