const { DataTypes } = require("sequelize");
const conexion = require("../database/conexion");

// Definición del modelo de Usuario
const Usuario = conexion.define(
  "Usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tipoDocumento: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "correo_UNIQUE",
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaExpedicion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numeroTelefono: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    numeroPin: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    tableName: "Usuario",
    timestamps: false,
    indexes: [
      {
        name: "idx_usuario",
        unique: true,
        fields: ["tipoDocumento", "documento"],
      },
      {
        name: "correo_UNIQUE",
        unique: true,
        fields: ["correo"],
      },
    ],
  }
);

module.exports = Usuario;
