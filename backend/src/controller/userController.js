const userService = require("../services/userService");
const jwtToken = require("jsonwebtoken");
const moment = require("moment");

const getUser = async (req, res) => {
  const { tipoDocumento, documento, numeroPin } = req.body;
  console.log(req.body);
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

  // Validación de formato de número de teléfono
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(numeroTelefono)) {
    return res.status(400).json({
      title: "Error",
      message:
        "El número de teléfono debe contener entre 10 y 15 dígitos. Por favor, verifica que el número ingresado sea correcto.",
      status: false,
    });
  }

  // Validación de formato de número PIN
  if (isNaN(numeroPin) || numeroPin.length < 4) {
    return res.status(400).json({
      title: "Error",
      message:
        "El número PIN debe ser un número positivo con al menos 4 dígitos. Asegúrate de que el PIN ingresado sea válido.",
      status: false,
    });
  }

  try {
    const validationError = await userService.checkUserExists(
      tipoDocumento,
      documento,
      correo
    );

    if (!validationError) {
      res.status(400).json({
        title: "Error de Registro",
        message:
          "El usuario con este tipo de documento y número ya está registrado.",
        status: false,
      });
    } else {
      // Crear el usuario y la cuenta asociada
      const user = await userService.createUserAccount(req.body);

      res.status(201).json({
        title: "Éxito",
        message: "El usuario ha sido creado exitosamente.",
        status: true,
        user,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      title: "Error",
      message:
        "Hubo un problema al crear el usuario. Por favor, intenta de nuevo más tarde.",
      status: false,
    });
  }
};

const validateHomeForm = (req, res) => {
  const { tipoDocumento, documento, fechaNacimiento, fechaExpedicion } =
    req.body;
  // Validación de fechas
  if (
    !moment(fechaNacimiento, "YYYY-MM-DD", true).isValid() ||
    !moment(fechaExpedicion, "YYYY-MM-DD", true).isValid()
  ) {
    return res.status(400).json({
      title: "Error",
      message:
        "Las fechas proporcionadas no son válidas. Por favor, usa el formato YYYY-MM-DD (año-mes-día).",
      status: false,
    });
  }

  // Validación del tipo de documento
  const validDocumentTypes = ["Cédula de Ciudadanía", "Tarjeta de Identidad"];
  if (!validDocumentTypes.includes(tipoDocumento)) {
    return res.status(400).json({
      title: "Error",
      message:
        "El tipo de documento seleccionado no es válido. Por favor, elige entre 'Cédula de Ciudadanía' o 'Tarjeta de Identidad'.",
      status: false,
    });
  }

  // Validación del número de documento
  if (!documento || isNaN(documento)) {
    return res.status(400).json({
      title: "Error",
      message:
        "El número de documento debe ser un valor numérico. Por favor, ingresa un número válido.",
      status: false,
    });
  }

  // Si todas las validaciones pasan
  return res.status(200).json({
    status: true,
  });
};

const validateTipeDocuments = async (req, res) => {
  const { tipoDocumento, documento } = req.body;

  if (!tipoDocumento || !documento) {
    return res.status(400).json({
      title: "Error",
      message: "Tipo de documento y número de documento son requeridos.",
      status: false,
    });
  }

  const validationError = await userService.checkUserDocuments(
    tipoDocumento,
    documento
  );
  if (validationError) {
    res.status(200).json({
      status: true,
    });
  } else {
    res.status(400).json({
      title: "Error",
      message: "Por favor, revisa si ya tienes una cuenta",
      status: false,
    });
  }
};

const getUserDocuments = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.getUserDocuments(id);
    console.log(user);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "Usuario no encontrado",
      });
    }
    res.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      title: "Error",
      message:
        "Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo más tarde.",
      status: false,
    });
  }
};

module.exports = {
  getUser,
  createUser,
  validateHomeForm,
  validateTipeDocuments,
  getUserDocuments,
};
