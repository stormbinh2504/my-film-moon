import mongoose from "mongoose";
import modelOptions from "./model.options.js";
const episodeSchema = new mongoose.Schema({
  movieId: { type: mongoose.Types.ObjectId, ref: 'Movie' },
  episodes: [{
    episodeNumber: {
      type: Number,
      description: "Số thứ tự của tập phim"
    },
    episodeLink: {
      type: String,
      description: "Đường dẫn đến tập phim"
    },
    episodeOrigin: {
      type: String,
      description: "Nguồn phim"
    },
  }],
}, modelOptions);

const episodeModel = mongoose.model("Episode", episodeSchema);

export default episodeModel;
