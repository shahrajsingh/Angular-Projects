const express = require("express");

const userController = require("../controllers/User");
const avtar = require("../middleware/avtar");
const router = express.Router();
const avatar = require("../middleware/avtar");

router.post("/signup", avatar, userController.signUp);
router.post("/login", userController.Login);

module.exports = router;
