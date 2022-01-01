const express= require('express');
const router = express.Router();

const albumController= require('../controllers/albumCON');

router.post("/album/:id",albumController.aldetail);

module.exports=router;