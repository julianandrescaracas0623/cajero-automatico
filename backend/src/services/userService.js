const userRepository = require("../repositories/userRepository");

// Obtener un usuario por tipo de documento, documento y número PIN
const getUser = async (tipoDocumento, documento, numeroPin) => {
  return await userRepository.getUserById(tipoDocumento, documento, numeroPin);
};

// Crear un nuevo usuario y su cuenta asociada
const createUser = async userData => {
  return await userRepository.createUser(userData);
};

// Crear un nuevo usuario y una cuenta asociada
const createUserAccount = async userData => {
  try {
    return await userRepository.createUserAccount(userData);
  } catch (error) {
    throw new Error("No se pudo crear el usuario y la cuenta.");
  }
};

module.exports = {
  getUser,
  createUser,
  createUserAccount,
};
