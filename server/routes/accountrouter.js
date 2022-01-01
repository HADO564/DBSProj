const express= require('express');
const router = express.Router();

const accountController = require('../controllers/accountCON');

// router.get("/search/users",accountController.findUsers);

router.post("/users/search", accountController.findUsers);

router.get("/user/settings/:id",accountController.SettingsUpdate);
router.get("/user/detail",accountController.accDetails);

module.exports=router;