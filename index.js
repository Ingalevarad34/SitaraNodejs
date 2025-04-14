const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
// app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "100mb" })); // Alternative way (for Express 4.16+)
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// Import Routes
const weeklyTopSongsRoutes = require("./routes/weeklyTopSongsRoutes");
const EnglishSongsRoutes = require("./routes/englishSongsRoutes");
const MarathiSongsRoutes = require("./routes/marathiSongsRoutes");
const newReleaseRoutes = require("./routes/newReleaseRoutes");
const trendingSongsRoutes = require("./routes/trendingSongsRoutes");
const artistRoutes = require("./routes/artistRoutes");
const musicVideoRoutes = require("./routes/musicVideoRoutes");
const topAlbumsRoutes = require("./routes/topAlbumsRoutes");
const moodPlaylistRoutes = require("./routes/moodPlaylistRoutes");
const allSongsRoutes = require("./routes/allSongsRoutes");
const musicGenresRoutes = require("./routes/musicGenreRoutes");
const playListRoutes = require("./routes/playListRoutes");
const wishListRoutes = require("./routes/wishListRoutes");
const userqueryRoutes = require("./routes/userqueryRoutes");

app.use("/api/weekly-songs", weeklyTopSongsRoutes);
app.use("/api/english-songs", EnglishSongsRoutes);
app.use("/api/marathi-songs", MarathiSongsRoutes);
app.use("/api/newRelease-songs", newReleaseRoutes);
app.use("/api/trending-songs", trendingSongsRoutes);
app.use("/api/artist-songs", artistRoutes);
app.use("/api/musicVideo-songs", musicVideoRoutes);
app.use("/api/topAlbums-songs", topAlbumsRoutes);
app.use("/api/moodPlaylist-songs", moodPlaylistRoutes);
app.use("/api/all-songs", allSongsRoutes);
app.use("/api/musicGenres-songs", musicGenresRoutes);
app.use("/api/playList-songs",playListRoutes);
app.use("/api/wishList-songs",wishListRoutes);
app.use("/api/userquery",userqueryRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));
