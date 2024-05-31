import express from "express";
import {
    createMovie, getAllMovies, getMovieById, updateMovieById, deleteMovieById,
    saveCountries, getCountries, saveGenres, getGenres,
    saveCategories,
    getCategories,

} from "../controllers/movie.controller.js";

const router = express.Router({ mergeParams: true });

router.post('/create', createMovie);
router.get('/get-movies', getAllMovies);
router.get('/get/:id', getMovieById);
router.put('/update/:id', updateMovieById);
router.delete('/delete/:id', deleteMovieById);

router.post("/categories", saveCategories);
router.get("/get-categories", getCategories);

router.post("/countries", saveCountries);
router.get("/get-countries", getCountries);

router.post("/genres", saveGenres);
router.get("/get-genres", getGenres);

export default router;