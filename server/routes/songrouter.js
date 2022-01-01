const express= require('express');
const router = express.Router();

const songController= require('../controllers/songCON');

router.get("/song/details/",songController.sdetails);
router.post("/song/add/:id",songController.addToPlaylist);
module.exports=router;