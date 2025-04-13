const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userquerySchema = new mongoose.Schema({
    userId: { type: Number, unique: true, sparse: true }, // Allow sparse to prevent null conflicts
    userName: { type: String, required: true },
    userSuggestion: { type: String, required: true },
});

// ✅ Apply auto-increment with a unique counter name
userquerySchema.plugin(AutoIncrement, { inc_field: "musicId", id: "userqueryCounter", start_seq: 1 });

module.exports = mongoose.model("userquery", userquerySchema);
