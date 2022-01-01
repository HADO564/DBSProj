const express = require("express");
const router = express.Router();

const artistController = require("../controllers/artistCON");

router.post("/details/", artistController.adetails);

module.exports = router;
