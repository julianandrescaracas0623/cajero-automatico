const express = require("express");
const auth = require("../jwt/jwt");
const router = express.Router();
const transaccionController = require("../controller/transaccionController");

router.get(
  "/transacciones/:idUsuario",
  auth,
  transaccionController.getTransacciones
);

module.exports = router;
