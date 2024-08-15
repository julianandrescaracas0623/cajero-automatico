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
  const { idCuenta, tipoTransaccion, monto } = transaccionData;

  // Funciones para ajustar el saldo basado en el tipo de transacción
  const saldoUpdateFunctions = {
    DEPOSITO: saldo => saldo + monto,
    RETIRO: saldo => {
      if (saldo < monto)
        throw new Error("Saldo insuficiente para realizar la transacción.");
      return saldo - monto;
    },
  };

  try {
    // Obtener la cuenta por ID
    const cuenta = await cuentaRepository.getCuentaById(idCuenta);

    if (!cuenta) {
      throw new Error("Cuenta no encontrada.");
    }

    // Obtener la función de actualización de saldo correspondiente al tipo de transacción
    const updateSaldo = saldoUpdateFunctions[tipoTransaccion];

    if (!updateSaldo) {
      throw new Error("Tipo de transacción inválido.");
    }

    // Calcular el nuevo saldo
    const updatedSaldo = updateSaldo(cuenta.saldo);

    // Crear la transacción en la base de datos
    await transaccionRepository.createTransaccion(transaccionData);

    // Actualizar el saldo de la cuenta
    await cuentaRepository.updateSaldo(idCuenta, updatedSaldo);

    return { ...transaccionData, saldoActualizado: updatedSaldo };
  } catch (error) {
    console.error("Error al crear la transacción:", error);
    throw new Error("No se pudo crear la transacción.");
  }
};

module.exports = {
  getTransaccionesByCuentaId,
  createTransaccion,
};
