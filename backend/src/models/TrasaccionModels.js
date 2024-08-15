const { DataTypes } = require("sequelize");
const conexion = require("../database/conexion");
const Cuenta = require("./CuentaModels");

const Transaccion = conexion.define(
  "Transaccion",
  {
    idTransaccion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idCuenta: {
      type: DataTypes.BIGINT,
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
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Transaccion",
    timestamps: false,
    indexes: [
      {
        name: "fk_Transaccion_Cuenta1_idx",
        fields: ["idCuenta"],
      },
    ],
  }
);

// Definir la asociación
Transaccion.belongsTo(Cuenta, { foreignKey: "idCuenta", as: "cuenta" });
Cuenta.hasMany(Transaccion, { foreignKey: "idCuenta", as: "transacciones" });

module.exports = Transaccion;
