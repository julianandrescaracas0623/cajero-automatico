const transaccionRepository = require("../repositories/transactionRepository");
const cuentaRepository = require("../repositories/userRepository");

// Obtener todas las transacciones por ID de cuenta
const getTransaccionesByCuentaId = async idCuenta => {
  try {
    return await transaccionRepository.getTransaccionesByCuentaId(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener las transacciones.");
  }
};

// Crear una nueva transacción y actualizar el saldo de la cuenta
const createTransaccion = async transaccionData => {
  try {
    return await transaccionRepository.createTransaccion(transaccionData);
  } catch (error) {
    throw new Error("No se pudo crear la transacción.");
  }
};

module.exports = {
  getTransaccionesByCuentaId,
  createTransaccion,
};
