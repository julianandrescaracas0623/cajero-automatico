const userService = require("../services/userService");
const jwtToken = require("jsonwebtoken");
const getUser = async (req, res) => {
  const { tipoDocumento, documento, numeroPin } = req.body;

  // Validaciones de entrada
  if (!tipoDocumento || !documento || !numeroPin) {
    return res.status(400).json({
      title: "Error",
      message:
        "Faltan datos necesarios. Asegúrate de proporcionar el tipo de documento, el número de documento y el número PIN.",
      status: false,
    });
  }

  try {
    const user = await userService.getUser(tipoDocumento, documento, numeroPin);
    //CREO EL TOKEN DE AUTENTICACION
    const token = jwtToken.sign(
      {
        idUsuario: user.idUsuario,
        tipoDocumento: user.tipoDocumento,
        documento: user.documento,
        numeroPin: user.numeroPin,
      },
      process.env.SECRETO,
      {
        expiresIn: "1d",
      }
    );

    if (user) {
      res.status(200).json({
        title: "Éxito",
        message: "Usuario encontrado con éxito.",
        status: true,
        user,
        token,
      });
    } else {
      res.status(404).json({
        title: "No encontrado",
        message: "No se encontró ningún usuario con los datos proporcionados.",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      title: "Error",
      message:
        "Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
      status: false,
    });
  }
};

const createUser = async (req, res) => {
  const {
    tipoDocumento,
    documento,
    nombre,
    correo,
    fechaNacimiento,
    fechaExpedicion,
    numeroTelefono,
    numeroPin,
  } = req.body;

  // Validaciones de entrada
  if (
    !tipoDocumento ||
    !documento ||
    !nombre ||
    !correo ||
    !fechaNacimiento ||
    !fechaExpedicion ||
    !numeroTelefono ||
    !numeroPin
  ) {
    return res.status(400).json({
      title: "Error",
      message:
        "Todos los campos son obligatorios: tipo de documento, documento, nombre, correo electrónico, fecha de nacimiento, número de teléfono y número PIN.",
      status: false,
    });
  }

  // Validación de formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return res.status(400).json({
      title: "Error",
      message:
        "El formato del correo electrónico es incorrecto. Por favor, ingresa un correo válido.",
      status: false,
    });
  }

  // Validación de formato de número de teléfono
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(numeroTelefono)) {
    return res.status(400).json({
      title: "Error",
      message:
        "El número de teléfono debe tener entre 10 y 15 dígitos. Por favor, verifica el formato.",
      status: false,
    });
  }

  // Validación de formato de número PIN
  if (
    isNaN(numeroPin) ||
    numeroPin <= 0 ||
    numeroPin.length < 4 ||
    numeroPin.length > 6
  ) {
    return res.status(400).json({
      title: "Error",
      message:
        "El número PIN debe ser un número positivo con entre 4 y 6 dígitos.",
      status: false,
    });
  }

  try {
    // Crear el usuario y la cuenta asociada
    const user = await userService.createUserAccount(req.body);

    res.status(201).json({
      title: "Éxito",
      message: "Usuario creado exitosamente.",
      status: true,
      user,
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({
      title: "Error",
      message:
        "Hubo un problema al crear el usuario. Por favor, intenta de nuevo más tarde.",
      status: false,
    });
  }
};

module.exports = {
  getUser,
  createUser,
};
