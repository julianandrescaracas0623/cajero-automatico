const cuentaRepository = require("../repositories/accountRepository");

// Obtener todas las transacciones por ID de cuenta
const getAccontByCuentaId = async idCuenta => {
  try {
    return await cuentaRepository.getAccontByCuentaId(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

const updateSaldo = async (idCuenta, nuevoSaldo) => {
  try {
    const verificacionCuenta =
      cuentaRepository.getAccontByCuentaIdCuenta(idCuenta);
    
    let saldoViejo = verificacionCuenta.dataValues.saldo;

    if (saldoViejo + nuevoSaldo < 0) {
      return false;
    } else {
      return await cuentaRepository.updateSaldo(idCuenta, nuevoSaldo);
    }
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

module.exports = { getAccontByCuentaId, updateSaldo };
