const express = require("express");
const auth = require("../jwt/jwt");
const router = express.Router();
const accountController = require("../controller/accountController");

router.get("/:idCuenta", auth, accountController.getAccount);
router.put("/update-accont", auth, accountController.UpdateSaldo);
router.get(
  "/verefy-accont/:idCuenta",
  auth,
  accountController.getNumberAccount
);

module.exports = router;
