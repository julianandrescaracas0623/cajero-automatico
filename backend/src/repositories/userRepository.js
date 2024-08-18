const bcrypt = require("bcryptjs");
const User = require("../models/UsuarioModels");
const Cuenta = require("../models/CuentaModels");

// Función para invertir una cadena
const reverseString = str => str.split("").reverse().join("");

// Obtener un usuario por tipo de documento, documento y número PIN
const getUserById = async (tipoDocumento, documento, numeroPin) => {
  try {
    const user = await User.findOne({
      where: { tipoDocumento, documento },
    });
    if (user) {
      const isMatch = await bcrypt.compare(numeroPin, user.numeroPin);
      if (isMatch) {
        return user;
      } else {
        throw new Error("Número PIN Incorrecto");
      }
    } else {
      throw new Error("Usuario No Encontrado");
    }
  } catch (error) {
    throw new Error(`Error Interno del Servidor: ${error.message}`);
  }
};

// Verefica si existe el mismo usuario
const checkIfUserExists = async (tipoDocumento, documento, correo) => {
  const userByCorreo = await User.findOne({ where: { correo } });

  if (userByCorreo) {
    return false;
  }

  const userByDocumento = await User.findOne({
    where: { tipoDocumento, documento },
  });
  if (userByDocumento) {
    return false;
  }
  return true;
};

const checkIfDocumentsExists = async (tipoDocumento, documento) => {
  const userByDocumento = await User.findOne({
    where: { tipoDocumento, documento },
  });
  console.log("Usuario encontrado:", userByDocumento);

  if (userByDocumento != null) {
    return true;
  }
  return false;
};

// Crear un nuevo usuario y una cuenta asociada
const createUserAccount = async userData => {
  try {
    const hashedPin = await bcrypt.hash(userData.numeroPin, 10);
    const user = await User.create({ ...userData, numeroPin: hashedPin });
    console.log(userData);
    // Generar idCuenta basado en el número de documento
    const idCuenta = generateCuentaId(userData.documento);

    // Crear la cuenta asociada
    const cuenta = await Cuenta.create({
      idCuenta,
      idUsuario: user.idUsuario,
      saldo: 0,
    });

    return user;
  } catch (error) {
    throw Error("Error Interno del Servidor");
  }
};

// Generar un ID de cuenta aleatorio basado en el número de documento
const generateCuentaId = documento => {
  const reversedDocumento = reverseString(documento.toString());
  const partialReversedDocumento = reversedDocumento.substring(0, 5);

  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const idCuenta = `${partialReversedDocumento}${randomNum}`;
  console.log(idCuenta);
  return idCuenta;
};

module.exports = {
  getUserById,
  createUserAccount,
  checkIfUserExists,
  checkIfDocumentsExists,
};
