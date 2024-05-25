import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import countryModel from "../models/country.model.js"; // Import the country model
import genreModel from "../models/genre.model.js"; // Import the genre model



const saveGenres = async (req, res) => {
    try {
        const genresData = req.body;

        // Loop through each country and save it to the database
        for (const country of genresData) {
            await genreModel.create(country);
        }
        responseHandler.ok(res, [], "Lưu danh sách thể loại phim thành công");
    } catch (error) {
        responseHandler.error(res, "Lưu danh sách thể loại phim thất bại");
    }
};

const getGenres = async (req, res) => {
    try {
        const genres = await genreModel.find(); // Fetch all genres from the database
        responseHandler.ok(res, genres, "Lấy danh sách thể loại phim thành công");
    } catch (error) {
        responseHandler.error(res, "Lấy danh sách thể loại phim thất bại");
    }
};

const saveCountries = async (req, res) => {
    try {
        const countriesData = req.body;

        // Loop through each country and save it to the database
        for (const country of countriesData) {
            await countryModel.create(country);
        }
        responseHandler.ok(res, [], "Lưu danh sách quốc gia thành công");
    } catch (error) {
        responseHandler.error(res, "Lưu danh sách quốc gia thất bại");
    }
};

const getCountries = async (req, res) => {
    try {
        const countries = await countryModel.find(); // Fetch all countries from the database
        responseHandler.ok(res, countries, "Lấy danh sách quốc gia thành công");
    } catch (error) {
        responseHandler.error(res, "Lấy danh sách quốc gia thất bại");
    }
};

export default { saveCountries, getCountries, saveGenres, getGenres };
