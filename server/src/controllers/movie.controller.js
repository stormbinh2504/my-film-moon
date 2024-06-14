import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import countryModel from "../models/country.model.js"; // Import the country model
import genreModel from "../models/genre.model.js"; // Import the genre model
import movieModel from "../models/movie.model.js";
import categoryModel from "../models/category.model.js";
import episodeModel from "../models/episode.model.js";

export const createMovie = async (req, res) => {
    try {
        const newMovie = new movieModel(req.body);
        const savedMovie = await newMovie.save();
        responseHandler.ok(res, savedMovie, "Movie created successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to create movie", error);
    }
};

export const getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.find();
        responseHandler.ok(res, movies, "Movies fetched successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to fetch all movies", error);
    }
};


export const getMoviesFilter = async (req, res) => {
    try {
        const { page = 1, limit = 10, filters } = req.body;

        // Build the filter object
        let filter = {};
        if (filters) {
            if (filters.nameSearch) {
                // Tìm kiếm không phân biệt chữ hoa chữ thường trong cả 'name' và 'nameEnglish'
                filter.$or = [
                    { name: { $regex: filters.nameSearch, $options: "i" } },
                    { nameEnglish: { $regex: filters.nameSearch, $options: "i" } }
                ];
            }
            if (filters.cast) {
                filter.cast = { $regex: filters.cast, $options: "i" };
            }
            if (filters.year) {
                filter.year = { $regex: filters.year, $options: "i" };
            }
        }

        // Find movies with the filter and apply pagination
        const movies = await movieModel.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        // Get the total count of movies matching the filter
        const total = await movieModel.countDocuments(filter);

        responseHandler.ok(res, {
            data: movies,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: parseInt(page)
        }, "Movies fetched successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to fetch all movies", error);
    }
};

// Get a single movie by ID
export const getMovieById = async (req, res) => {
    try {
        let movie = await movieModel.findById(req.params.id);

        const episodeDocument = await episodeModel.findOne({ movieId: req.params.id });

        if (!movie) {
            return responseHandler.error(res, "Movie not found");
        }
        if (episodeDocument) {
            movie = movie.toObject(); // Chuyển đổi tài liệu Mongoose thành đối tượng đơn giản
            movie.episodeId = episodeDocument._id;
        }

        responseHandler.ok(res, movie, "Movie fetched successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to fetch movie", error);
    }
};

// Update a movie by ID
export const updateMovieById = async (req, res) => {
    try {
        const updatedMovie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) {
            return responseHandler.error(res, "Movie not found");
        }
        responseHandler.ok(res, updatedMovie, "Movie updated successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to update movie", error);
    }
};

// Delete a movie by ID
export const deleteMovieById = async (req, res) => {
    try {
        const deletedMovie = await movieModel.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return responseHandler.error(res, "Movie not found");
        }
        responseHandler.ok(res, deletedMovie, "Movie deleted successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to delete movie", error);
    }
};


export const saveCategories = async (req, res) => {
    try {
        const categoryData = req.body;

        // Loop through each category and save it to the database
        for (const category of categoryData) {
            await categoryModel.create(category);
        }
        responseHandler.ok(res, categoryData, "Category saved successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to save Category", error);
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find(); // Fetch all categorys from the database
        responseHandler.ok(res, categories, "Categories fetched successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to fetch Categories", error);
    }
};

export const saveGenres = async (req, res) => {
    try {
        const genresData = req.body;

        // Loop through each genre and save it to the database
        for (const genre of genresData) {
            await genreModel.create(genre);
        }
        responseHandler.ok(res, [], "Genres saved successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to save genres", error);
    }
};

export const getGenres = async (req, res) => {
    try {
        const genres = await genreModel.find(); // Fetch all genres from the database
        responseHandler.ok(res, genres, "Genres fetched successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to fetch genres", error);
    }
};

export const saveCountries = async (req, res) => {
    try {
        const countriesData = req.body;

        // Loop through each country and save it to the database
        for (const country of countriesData) {
            await countryModel.create(country);
        }
        responseHandler.ok(res, [], "Countries saved successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to save countries", error);
    }
};

export const getCountries = async (req, res) => {
    try {
        const countries = await countryModel.find(); // Fetch all countries from the database
        responseHandler.ok(res, countries, "Countries fetched successfully");
    } catch (error) {
        responseHandler.error(res, "Failed to fetch countries", error);
    }
};
