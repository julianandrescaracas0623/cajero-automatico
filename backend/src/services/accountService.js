const cuentaRepository = require("../repositories/accountRepository");

// Obtener todas las transacciones por ID de cuenta
const getAccontByCuentaId = async (idCuenta) => {
  try {
    return await cuentaRepository.getAccontByCuentaId(idCuenta);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

const updateSaldo = async (idCuenta, nuevoSaldo) => {
  try {
    const cuenta = await cuentaRepository.getAccontByCuentaIdCuenta(idCuenta);

    const saldoViejo = cuenta.saldo;
    const saldoActualizado = saldoViejo + nuevoSaldo;

    if (saldoActualizado < 0) {
      return false;
    }

    return await cuentaRepository.updateSaldo(idCuenta, saldoActualizado);
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
  }
};

module.exports = { getAccontByCuentaId, updateSaldo };
