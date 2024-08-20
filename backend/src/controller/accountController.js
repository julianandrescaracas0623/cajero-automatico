const accountService = require("../services/accountService");
const transaccionService = require("../services/transaccionService");

const getAccount = async (req, res) => {
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
    const { idCuenta, saldo, tipoTransaccion } = req.body;

    if (!idCuenta || !saldo) {
      return res
        .status(400)
        .json({ title: "Faltan parámetros necesarios", status: false });
    }

    const saldoNumerico = parseFloat(saldo);
    if (saldoNumerico < 0) {
      return res.status(400).json({
        title: "Saldo inválido",
        message:
          "El saldo proporcionado no es un número válido. Por favor, ingrese un número válido.",
        status: false,
      });
    }

    const saldoContado = await accountService.updateSaldo(
      idCuenta,
      saldoNumerico
    );

    // Verificar el resultado de la actualización
    if (saldoContado == false) {
      // Si no se actualizó ninguna fila
      return res.status(404).json({
        title: "Cuenta no encontrada",
        message:
          "El número de cuenta proporcionado no existe. Por favor, verifique el número e intente nuevamente.",
        status: false,
      });
    }

    const numeroCuenta = await accountService.getAccontId(idCuenta);

    if (!numeroCuenta) {
      return res.status(404).json({
        title: "Cuenta no encontrada",
        message:
          "No encontramos una cuenta con ese número. Por favor, verifica el número e inténtalo de nuevo.",
        status: false,
      });
    }

    const createTransaccion = await transaccionService.createTransaccion({
      idCuenta,
      tipoTransaccion: "Consignar Saldo",
      monto: saldo,
    });

    if (!createTransaccion) {
      return res.status(404).json({
        title: "Error en la trasaccion",
        message:
          "No se pudo registrar la transacción. Por favor, inténtelo de nuevo más tarde.",
        status: false,
      });
    }

    // Responder con éxito
    res.status(200).json({
      title: "Saldo actualizado",
      message: "El saldo se actualizó correctamente.",
      status: true,
      cuenta: numeroCuenta,
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

const getNumberAccount = async (req, res) => {
  try {
    const { idCuenta } = req.params;

    const numeroCuenta = 
    await accountService.getCuentaAndUsuarioById(idCuenta);

    if (!numeroCuenta) {
      return res.status(404).json({
        title: "Cuenta no encontrada",
        message:
          "No encontramos una cuenta con ese número. Por favor, verifica el número e inténtalo de nuevo.",
        status: false,
      });
    }

    // Responder con éxito
    res.status(200).json({
      title: "Cuenta encontrada",
      message: "¡Listo! Encontramos tu cuenta.",
      status: true,
      cuenta: numeroCuenta,
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

module.exports = { getAccount, UpdateSaldo, getNumberAccount };
