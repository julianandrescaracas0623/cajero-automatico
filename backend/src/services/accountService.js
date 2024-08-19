const cuentaRepository = require("../repositories/accountRepository");

// Obtener todas las transacciones por ID de cuenta
const getAccontByCuentaId = async idCuenta => {
  try {
    return await cuentaRepository.getAccontByCuentaId(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

module.exports = { getAccontByCuentaId };
