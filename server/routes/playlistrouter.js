const express = require("express");
const playlistController = require("../controllers/playlistCON");
const router = express.Router();
router.get("/detail/:id", playlistController.pdetails);

module.exports = router;
