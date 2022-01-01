const express = require("express");
const router = express.Router();

const accountController = require("../controllers/accountCON");

// router.get("/search/users",accountController.findUsers);

router.post("/search", accountController.findUsers);

router.get("/settings/:id", accountController.SettingsUpdate);
router.get("/detail", accountController.accDetails);

module.exports = router;
