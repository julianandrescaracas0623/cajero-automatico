const Cuenta = require("../models/CuentaModels");
const Sequelize = require("sequelize");

const getAccontByCuentaId = async (idUsuario) => {
  try {
    const valor = await Cuenta.findAll({
      where: { idUsuario },
    });
    return valor;
  } catch (error) {
    throw new Error("No se pudieron obtener las cuenta.");
  }
};

const getAccontByCuentaIdCuenta = async (idCuenta) => {
  try {
    const cuenta = await Cuenta.findByPk(idCuenta);
    if (!cuenta) {
      throw new Error("Cuenta no encontrada.");
    }
    return cuenta;
  } catch (error) {
    throw new Error("No se pudieron obtener las cuenta.");
  }
};

// Actualizar el saldo de una cuenta
const updateSaldo = async (idCuenta, nuevoSaldo) => {
  try {
    const update = await Cuenta.update(
      { saldo: nuevoSaldo },
      { where: { idCuenta: idCuenta } }
    );
    return update;
  } catch (error) {
    throw new Error("No se pudo actualizar el saldo de la cuenta.");
  }
};

module.exports = {
  getAccontByCuentaId,
  updateSaldo,
  getAccontByCuentaIdCuenta,
};
