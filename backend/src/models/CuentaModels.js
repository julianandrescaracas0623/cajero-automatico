const { DataTypes } = require("sequelize");
const  conexion  = require("../database/conexion");
const Usuario = require("./UsuarioModels");

const Cuenta = conexion.define(
  "Cuenta",
  {
    idCuenta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "Cuenta",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["idUsuario"],
      },
    ],
  }
);

// Definir la relación con Usuario
Cuenta.belongsTo(Usuario, {
  foreignKey: "idUsuario",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});

module.exports = Cuenta;
