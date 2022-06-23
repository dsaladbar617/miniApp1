import express from "express";
const router = express.Router();

import { fullList, searchResults, removeMovie, addMovie } from "../controllers/listController.js";

router.route('/all').get(fullList);
router.route('/all').delete(removeMovie);
router.route('/all').post(addMovie);


router.route('/search/:results').get(searchResults);
router.route('/search/:results').delete(removeMovie);
router.route('/search/:results').post(addMovie);

export default router;