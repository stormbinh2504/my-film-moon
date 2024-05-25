import express from "express";
import mediaController from "../controllers/media.controller.js";

// const router = express.Router({ mergeParams: true });
const router = express.Router();

router.get("/search", mediaController.search);

router.get("/genres", mediaController.getGenres);

router.get("/detail/:mediaId", mediaController.getDetail);

router.get("/:mediaCategory", mediaController.getList);

export default router;