const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/:tipoDocumento/:documento", userController.getUser);
router.post("/", userController.createUser);

module.exports = router;
