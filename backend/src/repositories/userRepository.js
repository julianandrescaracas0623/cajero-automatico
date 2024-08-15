const crypto = require("crypto");
const User = require("../models/UsuarioModels");
const Cuenta = require("../models/CuentaModels");

// Función para invertir una cadena
const reverseString = str => str.split("").reverse().join("");

// Obtener un usuario por tipo de documento, documento y número PIN
const getUserById = async (tipoDocumento, documento, numeroPin) => {
  try {
    const user = await User.findOne({
      where: { tipoDocumento, documento, numeroPin },
    });
    return user;
  } catch (error) {
    throw new Error("No se pudo obtener el usuario.");
  }
};

// Crear un nuevo usuario y una cuenta asociada
const createUserAccount = async userData => {
  try {
    const user = await User.create(userData);
    // Generar idCuenta basado en el número de documento
    const idCuenta = generateCuentaId(userData.documento);

    // Crear la cuenta asociada
    await Cuenta.create({
      idCuenta,
      idUsuario: user.id,
      saldo: 0,
    });

    return user;
  } catch (error) {
    console.error("Error al crear usuario y cuenta:", error);
    throw new Error("No se pudo crear el usuario y la cuenta.");
  }
};

// Generar un ID de cuenta aleatorio basado en el número de documento
const generateCuentaId = documento => {
  const reversedDocumento = reverseString(documento.toString());
  const randomSuffix = crypto.randomBytes(4).toString("hex");
  const idCuenta = `${reversedDocumento}-${randomSuffix}`;
  return idCuenta;
};

module.exports = {
  getUserById,
  createUserAccount,
};
