import mongoose from "mongoose";
import modelOptions from "./model.options.js";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
}, modelOptions);

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
