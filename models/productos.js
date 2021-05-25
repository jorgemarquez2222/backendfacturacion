const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Productos = db.sequelize.define('productos', {
  id_producto: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: { type: DataTypes.STRING },
  id_rubro: {type: DataTypes.NUMBER},
  entrada: {type: DataTypes.FLOAT},
  salida: {type: DataTypes.FLOAT},
  precio_paca_dolar: {type: DataTypes.FLOAT},
  cantidad_por_paca: {type: DataTypes.FLOAT},
  porcentaje_ganancia: {type: DataTypes.FLOAT},
  cantidad: {type: DataTypes.NUMBER},
});

module.exports = {
  Productos
}