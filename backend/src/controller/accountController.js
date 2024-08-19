const accountService = require("../services/accountService");

const getAccount = async (req, res) => {
  const { idCuenta } = req.params;
  console.log(idCuenta);
  // Validar ID de cuenta
  if (!idCuenta) {
    return res.status(400).json({
      title: "ID de Cuenta Requerido",
      status: false,
      message: "El ID de cuenta es necesario para realizar la búsqueda.",
    });
  }

  try {
    const cuenta = await accountService.getAccontByCuentaId(idCuenta);

    if (cuenta.length > 0) {
      res.status(200).json({
        title: "Transacciones Obtenidas",
        message: "Transacciones obtenidas exitosamente.",
        status: true,
        cuenta,
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

module.exports = { getAccount };
