import mongoose from "mongoose";
import modelOptions from "./model.options.js";

const countrySchema = new mongoose.Schema({
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

const countryModel = mongoose.model("Country", countrySchema);

export default countryModel;
