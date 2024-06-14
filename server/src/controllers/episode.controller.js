import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import countryModel from "../models/country.model.js"; // Import the country model
import genreModel from "../models/genre.model.js"; // Import the genre model
import movieModel from "../models/movie.model.js";
import categoryModel from "../models/category.model.js";
import episodeModel from "../models/episode.model.js";

// Add a new episode
export const addEpisode = async (req, res) => {
    const { movieId, episodes } = req.body;

    try {
        // Find the existing document or create a new one
        let episodeDocument = await episodeModel.findOne({ movieId });

        if (!episodeDocument) {
            episodeDocument = new episodeModel({
                movieId: movieId,
                episodes: episodes
            });
        } else {
            // Append new episodes to the existing list
            episodes.forEach(episode => {
                episodeDocument.episodes.push(episode);
            });
        }

        // Save the document
        const savedDocument = await episodeDocument.save();

        responseHandler.ok(res, savedDocument, "Episode added successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to add episodes", error);
    }
};

// Get all episodes
export const getAllEpisodes = async (req, res) => {
    try {
        const episodes = await episodeModel.find();
        responseHandler.ok(res, episodes, "Episodes retrieved successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to retrieve episodes", error);
    }
};

// Get an episode by ID
export const getEpisodeByMovieId = async (req, res) => {
    const { movieId } = req.params;

    try {
        const episodeDocument = await episodeModel.findOne({ movieId });
        if (!episodeDocument) {
            return responseHandler.error(res, "Episode not found");
        }
        responseHandler.ok(res, episodeDocument, "Episode retrieved successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to retrieve episode", error);
    }

};


// Update an episode by ID
export const updateEpisodeById = async (req, res) => {
    const { episodeId } = req.params;

    try {
        const updatedEpisode = await episodeModel.findByIdAndUpdate(episodeId, req.body, { new: true });
        if (!updatedEpisode) {
            return responseHandler.error(res, "Episode not found");
        }
        responseHandler.ok(res, updatedEpisode, "Episode updated successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to update episode", error);
    }
};

// Delete an episode by ID
export const deleteEpisodeById = async (req, res) => {
    const { episodeId } = req.params;
    try {
        const deletedEpisode = await episodeModel.findByIdAndDelete(episodeId);
        if (!deletedEpisode) {
            return responseHandler.error(res, "Episode not found");
        }
        responseHandler.ok(res, deletedEpisode, "Episode deleted successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to delete episode", error);
    }
};