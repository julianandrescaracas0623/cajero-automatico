const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/conexion");
const { Usuario } = require("./UsuarioModels");

const Cuenta = sequelize.define(
  "Cuenta",
  {
    idCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tipoDocumento: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  {
    tableName: "Cuenta",
    timestamps: false,
  }
);

// Definir la relación
Cuenta.belongsTo(Usuario, {
  foreignKey: "tipoDocumento",
  targetKey: "tipoDocumento",
});
Cuenta.belongsTo(Usuario, {
  foreignKey: "documento",
  targetKey: "documento",
});

module.exports = Cuenta;
