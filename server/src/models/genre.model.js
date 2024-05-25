import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const genreModel = mongoose.model("Genre", genreSchema);

export default genreModel;
