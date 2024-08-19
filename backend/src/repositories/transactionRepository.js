const Transaccion = require("../models/TrasaccionModels");
const Cuenta = require("../models/CuentaModels");

const getTransaccionesByCuentaId = async idUsuario => {
  try {
    return await Transaccion.findAll({
      where: { idUsuario },
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

// Actualizar el saldo de una cuenta
const updateSaldo = async (idCuenta, nuevoSaldo) => {
  try {
    return await Cuenta.update({ saldo: nuevoSaldo }, { where: { idCuenta } });
  } catch (error) {
    console.error("Error al actualizar el saldo de la cuenta:", error);
    throw new Error("No se pudo actualizar el saldo de la cuenta.");
  }
};

module.exports = {
  getTransaccionesByCuentaId,
  createTransaccion,
};
