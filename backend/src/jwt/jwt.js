const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Verifica el token válido en el header de la request, Authorization
  const jwtToken = req.header("Authorization");

  if (!jwtToken) {
    return res.status(401).json({
      title: "Acceso Denegado",
      message: "No se proporcionó token de autorización.",
      status: false,
    });
  }

  try {
    const payload = jwt.verify(jwtToken, process.env.SECRETO);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      title: "Token Inválido",
      message: "El token de autorización no es válido o ha expirado.",
      status: false,
    });
  }
};

module.exports = auth;
