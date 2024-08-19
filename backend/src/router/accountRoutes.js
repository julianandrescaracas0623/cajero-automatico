const express = require("express");
const auth = require("../jwt/jwt");
const router = express.Router();
const accountController = require("../controller/accountController");

router.get("/:idCuenta", auth, accountController.getAccount);

module.exports = router;
