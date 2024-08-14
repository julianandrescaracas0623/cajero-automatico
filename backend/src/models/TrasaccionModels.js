const { DataTypes } = require("sequelize");
const conexion = require("../database/conexion");
const Cuenta = require("./CuentaModels");

const Transaccion = conexion.define(
  "Transaccion",
  {
    idTransaccion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    idCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoTransaccion: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    fechaTransaccion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "Transaccion",
    timestamps: false,
    indexes: [
      {
        fields: ["idCuenta"],
      },
    ],
  }
);

// Definir la relación con Cuenta
Transaccion.belongsTo(Cuenta, {
  foreignKey: "idCuenta",
  onDelete: "NO ACTION",
  onUpdate: "NO ACTION",
});
module.exports = Transaccion;
