const User = require("../models/UsuarioModels");

const getUserById = async (tipoDocumento, documento) => {
  return await User.findOne({ where: { tipoDocumento, documento } });
};

const createUser = async userData => {
  return await User.create(userData);
};

module.exports = {
  getUserById,
  createUser,
};
