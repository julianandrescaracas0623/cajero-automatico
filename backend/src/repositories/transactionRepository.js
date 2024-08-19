const Transaccion = require("../models/TrasaccionModels");
const Cuenta = require("../models/CuentaModels");

const getTransaccionesByCuentaId = async idCuenta => {
  try {
    return await Transaccion.findAll({
      where: { idCuenta },
    });
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    throw new Error("No se pudieron obtener las transacciones.");
  }
};

const createTransaccion = async transaccionData => {
  try {
    return await Transaccion.create(transaccionData);
  } catch (error) {
    console.error("Error al crear transacción:", error);
    throw new Error("No se pudo crear la transacción.");
  }
};



module.exports = {
  getTransaccionesByCuentaId,
  createTransaccion,
};
