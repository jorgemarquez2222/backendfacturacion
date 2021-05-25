const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Productos = db.sequelize.define('productos', {
  id_producto: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: { type: DataTypes.STRING },
  id_rubro: {type: DataTypes.NUMBER},
  entrada: {type: DataTypes.FLOAT},
  salida: {type: DataTypes.FLOAT},
  precio_venta: {type: DataTypes.FLOAT},
  precio_compra: {type: DataTypes.FLOAT},
  precio: {type: DataTypes.FLOAT},
});

module.exports = {
  Productos
}