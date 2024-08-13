const { DataTypes } = require("sequelize");
const sequelize = require("../db/conexion");
const Cuenta = require("./CuentaModels");

const Transaccion = sequelize.define(
  "Transaccion",
  {
    idTransaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoTransaccion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    fechaTransaccion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Transaccion",
    timestamps: false,
  }
);

// Definir la relación
Transaccion.belongsTo(Cuenta, {
  foreignKey: "idCuenta",
  targetKey: "idCuenta",
});
module.exports = Transaccion;
