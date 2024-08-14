const { DataTypes } = require("sequelize");
const conexion = require("../database/conexion");

// Definición del modelo de Usuario
const Usuario = conexion.define(
  "Usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
      unique: true,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Usuario",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["tipoDocumento", "documento"],
      },
    ],
  }
);

module.exports = Usuario;
