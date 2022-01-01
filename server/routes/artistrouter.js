const express= require('express');
const router = express.Router();

const artistController= require('../controllers/artistCON');

router.post("/artist/detail/",artistController.adetails);
module.exports=router;