const { DataTypes } = require("sequelize");
const conexion = require("../database/conexion");
const Usuario = require("./UsuarioModels");

const Cuenta = conexion.define(
  "Cuenta",
  {
    idCuenta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
        name: "idx_usuario",
        unique: true,
        fields: ["idUsuario"],
      },
    ],
  }
);

// Definir la asociación
Cuenta.belongsTo(Usuario, { foreignKey: "idUsuario", as: "usuario" });
Usuario.hasMany(Cuenta, { foreignKey: "idUsuario", as: "cuentas" });

module.exports = Cuenta;
