const express = require("express");
const router = express.Router();

const songController = require("../controllers/songCON");

router.get("/details/", songController.sdetails);
router.post("/add/:id", songController.addToPlaylist);
module.exports = router;
