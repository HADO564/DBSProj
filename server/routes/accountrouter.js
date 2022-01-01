const express= require('express');
const router = express.Router();

const accountController= require('../controllers/accountCON');

router.post("/search/users",accountController.findUsers);
router.post("/setting/users/:id",accountController.SettingsUpdate);
router.post("/user/detail",accountController.accDetails);
module.exports=router;