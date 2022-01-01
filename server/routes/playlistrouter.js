const express = require('express')
const playlistController = require('../controllers/playlistCON');
const router = express.Router();
router.get("/playlist/detail/:id",playlistController.pdetails);
router.get("/playlist/add/:sid",playlistController.AddSong);
router.get("/playlist/remove/:sid",playlistController.RemoveSong);

