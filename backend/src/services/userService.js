const userRepository = require("../repositories/userRepository");

const getUser = async (tipoDocumento, documento) => {
  return await userRepository.getUserById(tipoDocumento, documento);
};

const createUser = async userData => {
  return await userRepository.createUser(userData);
};

module.exports = {
  getUser,
  createUser,
};
