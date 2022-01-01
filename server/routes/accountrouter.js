const express= require('express');
const router = express.Router();

const accountController = require('../controllers/accountCON');

// router.get("/search/users",accountController.findUsers);

router.post("/search/users", accountController.findUsers);

router.get("/setting/users/:id",accountController.SettingsUpdate);
router.get("/user/detail",accountController.accDetails);

module.exports=router;