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
        title: "Cuenta Obtenidas",
        message: "Cuenta obtenidas exitosamente.",
        status: true,
        cuenta,
      });
    } else {
      res.status(404).json({
        title: "No se Encontraron Cuenta",
        status: false,
        message: "No se encontraron Cuenta para el ID de cuenta proporcionado.",
      });
    }
  } catch (error) {
    console.error("Error al obtener Cuenta:", error);
    res.status(500).json({
      title: "Error Interno del Servidor",
      message:
        "Ocurrió un error al intentar obtener las Cuenta. Por favor, intente nuevamente más tarde.",
      status: false,
    });
  }
};

const UpdateSaldo = async (req, res) => {
  try {
    const { idCuenta, saldo } = req.body;

    if (!idCuenta || !saldo) {
      return res
        .status(400)
        .json({ title: "Faltan parámetros necesarios", status: false });
    }
    const saldoContado = await accountService.updateSaldo(idCuenta, saldo);

    // Verificar el resultado de la actualización
    if (saldoContado == false) {
      // Si no se actualizó ninguna fila
      return res.status(404).json({
        title: "Cuenta no encontrada",
        message: "No se encontró ninguna cuenta con el id proporcionado.",
        status: false,
      });
    }

    // Responder con éxito
    res.status(200).json({
      title: "Saldo actualizado",
      message: "El saldo se actualizó correctamente.",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      title: "Error Interno del Servidor",
      message:
        "Ocurrió un error al intentar obtener las Cuenta. Por favor, intente nuevamente más tarde.",
      status: false,
    });
  }
};

module.exports = { getAccount, UpdateSaldo };
