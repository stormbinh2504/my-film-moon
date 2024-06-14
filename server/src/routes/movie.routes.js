import express from "express";
import {
    createMovie, getAllMovies, getMovieById, updateMovieById, deleteMovieById,
    saveCountries, getCountries, saveGenres, getGenres,
    saveCategories,
    getCategories,
    getMoviesFilter,

} from "../controllers/movie.controller.js";
import { addEpisode, deleteEpisodeById, getAllEpisodes, getEpisodeByMovieId, updateEpisodeById } from "../controllers/episode.controller.js";

const router = express.Router({ mergeParams: true });


// Route to add a new episode
router.post('/add-episode', addEpisode);

// Route to get all episodes
router.get('/get-all-episodes', getAllEpisodes);

// Route to get an episode by ID
router.get('/get-episode-movieid/:movieId', getEpisodeByMovieId);

// Route to update an episode by ID
router.put('/update-episode/:episodeId', updateEpisodeById);

// Route to delete an episode by ID
router.delete('/delete-episode/:episodeId', deleteEpisodeById);

//

router.post('/create', createMovie);
router.post('/get-filter-movies', getMoviesFilter);
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