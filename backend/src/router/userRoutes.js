const express = require("express");
const router = express.Router();
const auth = require("../jwt/jwt");
const userController = require("../controller/userController");

router.post("/login", userController.getUser);
router.get("/login/autorization/:id", auth, userController.getUserDocuments);
router.post("/create", userController.createUser);
router.post("/create/validate-home", userController.validateHomeForm);
router.post("/home/validate-home", userController.validateTipeDocuments);

module.exports = router;
