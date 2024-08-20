const sequelize = require("../database/conexion");
const Cuenta = require("../models/CuentaModels");

const getAccontByCuentaId = async idUsuario => {
  try {
    const valor = await Cuenta.findAll({
      where: { idUsuario },
    });
    return valor;
  } catch (error) {
    throw new Error("No se pudieron obtener las cuenta.");
  }
};

const getAccontByCuentaIdCuenta = async idCuenta => {
  try {
    const cuenta = await Cuenta.findByPk(idCuenta);
    if (!cuenta) {
      return cuenta;
    }
    return cuenta;
  } catch (error) {
    throw new Error("No se pudieron obtener las cuenta.");
  }
};

const getCuentaAndUsuarioById = async idCuenta => {
  try {
    const result = await sequelize.query(
      `SELECT usuario.tipoDocumento, usuario.documento, cuenta.idCuenta, usuario.nombre, cuenta.saldo, transaccion.monto
       FROM cuenta
       JOIN usuario ON usuario.idUsuario = cuenta.idUsuario
       INNER JOIN transaccion ON transaccion.idCuenta = cuenta.idCuenta
       WHERE cuenta.idCuenta = :idCuenta
       AND transaccion.fechaTransaccion = (
         SELECT MAX(t2.fechaTransaccion)
         FROM transaccion t2
         WHERE t2.idCuenta = cuenta.idCuenta
       )`,
      {
        replacements: { idCuenta },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (result.length === 0) {
      return null; // Devuelve null si no se encuentra la cuenta
    }

    return result[0]; // Retorna el primer resultado
  } catch (error) {
    throw new Error("No se pudieron obtener la cuenta.");
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
  getCuentaAndUsuarioById,
};
