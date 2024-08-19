const transaccionService = require("../services/transaccionService");

// Obtener transacciones por ID de cuenta
const getTransacciones = async (req, res) => {
  const { idCuenta } = req.params;

  // Validar ID de cuenta
  if (!idCuenta) {
    return res.status(400).json({
      title: "ID de Cuenta Requerido",
      status: false,
      message: "El ID de cuenta es necesario para realizar la búsqueda.",
    });
  }

  try {
    const transacciones = await transaccionService.getTransaccionesByCuentaId(
      idCuenta
    );

    if (transacciones.length > 0) {
      res.status(200).json({
        title: "Transacciones Obtenidas",
        message: "Transacciones obtenidas exitosamente.",
        status: true,
        transacciones,
      });
    } else {
      res.status(404).json({
        title: "No se Encontraron Transacciones",
        status: false,
        message:
          "No se encontraron transacciones para el ID de cuenta proporcionado.",
      });
    }
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    res.status(500).json({
      title: "Error Interno del Servidor",
      message:
        "Ocurrió un error al intentar obtener las transacciones. Por favor, intente nuevamente más tarde.",
      status: false,
    });
  }
};

// Crear una nueva transacción
const createTransaccion = async (req, res) => {
  const { idCuenta, tipoTransaccion, monto, fechaTransaccion } = req.body;

  // Validaciones de entrada
  if (!idCuenta || !tipoTransaccion || !monto || !fechaTransaccion) {
    return res.status(400).json({
      title: "Datos Incompletos",
      status: false,
      message:
        "Todos los campos son necesarios: idCuenta, tipoTransaccion, monto y fechaTransaccion.",
    });
  }

  // Validación de tipoTransaccion
  const validTipoTransacciones = ["DEPOSITO", "RETIRO"];
  if (!validTipoTransacciones.includes(tipoTransaccion)) {
    return res.status(400).json({
      title: "Tipo de Transacción Inválido",
      status: false,
      message: "Tipo de transacción inválido. Debe ser 'DEPOSITO' o 'RETIRO'.",
    });
  }

  // Validación de monto
  if (isNaN(monto) || monto <= 0) {
    return res.status(400).json({
      title: "Monto Inválido",
      status: false,
      message: "El monto debe ser un número positivo.",
    });
  }

  try {
    // Crear la transacción
    const transaccion = await transaccionService.createTransaccion(req.body);

    res.status(201).json({
      title: "Transacción Creada",
      message: "Transacción creada exitosamente.",
      status: true,
      transaccion,
    });
  } catch (error) {
    console.error("Error al crear la transacción:", error);
    res.status(500).json({
      title: "Error Interno del Servidor",
      message:
        "Ocurrió un error al intentar crear la transacción. Por favor, intente nuevamente más tarde.",
      status: false,
    });
  }
};

module.exports = {
  getTransacciones,
  createTransaccion,
};
