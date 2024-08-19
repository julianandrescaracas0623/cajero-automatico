const express = require("express");
const auth = require("../jwt/jwt");
const router = express.Router();
const accountController = require("../controller/accountController");

router.get("/:idCuenta", auth, accountController.getAccount);
router.put("/update-accont", auth, accountController.UpdateSaldo);

module.exports = router;
