import mongoose from "mongoose";

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
});

const countryModel = mongoose.model("Country", countrySchema);

export default countryModel;
