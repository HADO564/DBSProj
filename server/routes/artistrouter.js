const express= require('express');
const router = express.Router();

const artistController= require('../controllers/artistCON');

router.post("/artist/follow/:id",artistController.afollow);
router.post("/artist/unfollow/:id",artistController.unfollow);
router.get("/artist/detail/:id",artistController.adetails)
module.exports=router;