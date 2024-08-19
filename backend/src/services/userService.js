const userRepository = require("../repositories/userRepository");

// Obtener un usuario por tipo de documento, documento y número PIN
const getUser = async (tipoDocumento, documento, numeroPin) => {
  return await userRepository.getUserById(tipoDocumento, documento, numeroPin);
};
const getUserDocuments = async idUsuario => {
  return await userRepository.getUserDocuments(idUsuario);
};
// Crear un nuevo usuario y una cuenta asociada
const createUserAccount = async userData => {
  return await userRepository.createUserAccount(userData);
};

const checkUserExists = async (tipoDocumento, documento, correo) => {
  return await userRepository.checkIfUserExists(
    tipoDocumento,
    documento,
    correo
  );
};

const checkUserDocuments = async (tipoDocumento, documento) => {
  return await userRepository.checkIfDocumentsExists(tipoDocumento, documento);
};

module.exports = {
  getUser,
  createUserAccount,
  checkUserExists,
  checkUserDocuments,
  getUserDocuments,
};
