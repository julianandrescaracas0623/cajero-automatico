const express = require("express");
const router = express.Router();
const transaccionController = require("../controller/transaccionController");

router.get("/transacciones/:idCuenta", transaccionController.getTransacciones);

module.exports = router;
