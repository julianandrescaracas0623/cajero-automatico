const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/login", userController.getUser);
router.post("/create", userController.createUser);
router.post("/create/validate-home", userController.validateHomeForm);
router.post("/home/validate-home", userController.validateTipeDocuments);

module.exports = router;
