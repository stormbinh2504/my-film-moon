import mongoose from "mongoose";
import modelOptions from "./model.options.js";

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
}, modelOptions);

const genreModel = mongoose.model("Genre", genreSchema);

export default genreModel;
