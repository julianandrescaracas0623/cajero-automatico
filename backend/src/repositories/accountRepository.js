const Cuenta = require("../models/CuentaModels");

const getAccontByCuentaId = async idUsuario => {
  try {
    return await Cuenta.findAll({
      where: { idUsuario },
    });
  } catch (error) {
    throw new Error("No se pudieron obtener las cuenta.");
  }
};

module.exports = { getAccontByCuentaId };
