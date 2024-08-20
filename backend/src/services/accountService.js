const cuentaRepository = require("../repositories/accountRepository");

// Obtener todas las transacciones por ID de cuenta
const getAccontByCuentaId = async idCuenta => {
  try {
    return await cuentaRepository.getAccontByCuentaId(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

const getAccontId = async idCuenta => {
  try {
    return await cuentaRepository.getAccontByCuentaIdCuenta(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

const getCuentaAndUsuarioById = async idCuenta => {
  try {
    return await cuentaRepository.getCuentaAndUsuarioById(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

const updateSaldo = async (idCuenta, nuevoSaldo) => {
  try {
    const cuenta = await cuentaRepository.getAccontByCuentaIdCuenta(idCuenta);

    if (cuenta === null) {
      return false;
    }

    const saldoViejo = cuenta.saldo;
    const saldoActualizado = saldoViejo + nuevoSaldo;

    return await cuentaRepository.updateSaldo(idCuenta, saldoActualizado);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

module.exports = { getAccontByCuentaId, updateSaldo, getAccontId, getCuentaAndUsuarioById};
