const { Sequelize } = require("sequelize");
require("dotenv").config();

const conexion = new Sequelize(process.env.DATABASE, process.env.USER, "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = conexion;
