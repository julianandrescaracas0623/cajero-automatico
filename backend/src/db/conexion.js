const { Sequelize } = require("sequelize");
require("dotenv").config();

const conexion = new Sequelize(process.env.DATABASE, process.env.USER, "", {
  host: "localhost",
  dialect: "mysql",
});

// Verificar la conexión
const authenticate = async () => {
  try {
    await conexion.authenticate();
    console.log("Conexión establecida con éxito.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

module.exports = {
  conexion,
  authenticate,
};
