const { DataTypes } = require("sequelize");
const sequelize = require("../db/conexion");

// Definición del modelo de Usuario
const Usuario = sequelize.define(
  "Usuario",
  {
    tipoDocumento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    documento: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fechaExpedicion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    numeroTelefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    numeroPin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Usuario",
    timestamps: false,
  }
);

module.exports = Usuario;
