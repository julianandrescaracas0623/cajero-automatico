const express = require("express");
const auth = require("../jwt/jwt");
const router = express.Router();
const pdfController = require("../report/reportesPdf");

router.get(
  "/generar-reporte/:idCuenta",
  auth,
  pdfController.generarReporteGeneral
);

module.exports = router;
