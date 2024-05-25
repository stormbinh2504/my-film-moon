import express from "express";
import movieController from "../controllers/movie.controller.js";

const router = express.Router({ mergeParams: true });

router.post("/countries", movieController.saveCountries);
router.get("/get-countries", movieController.getCountries);

router.post("/genres", movieController.saveGenres);
router.get("/get-genres", movieController.getGenres);

export default router;