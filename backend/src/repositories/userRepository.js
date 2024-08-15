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
        return res.status(401).json({
          title: "Número PIN Incorrecto",
          message: "El número PIN proporcionado es incorrecto.",
          status: false,
        });
      }
    } else {
      return res.status(404).json({
        title: "Usuario No Encontrado",
        message: "No se encontró ningún usuario con los datos proporcionados.",
        status: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      title: "Error Interno del Servidor",
      message:
        "Ocurrió un error al intentar obtener el usuario. Por favor, intente nuevamente más tarde.",
      status: false,
    });
  }
};

// Crear un nuevo usuario y una cuenta asociada
const createUserAccount = async userData => {
  try {
    const hashedPin = await bcrypt.hash(userData.numeroPin, 10);
    const user = await User.create({ ...userData, numeroPin: hashedPin });

    // Generar idCuenta basado en el número de documento
    const idCuenta = generateCuentaId(userData.documento);

    // Crear la cuenta asociada
    await Cuenta.create({
      idCuenta,
      idUsuario: user.idUsuario,
      saldo: 0,
    });

    return user;
  } catch (error) {
    return res.status(500).json({
      title: "Error Interno del Servidor",
      message:
        "Ocurrió un error al intentar crear el usuario y la cuenta. Por favor, intente nuevamente más tarde.",
      status: false,
    });
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
};
