const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/login", userController.getUser);
router.post("/create", userController.createUser);

module.exports = router;
