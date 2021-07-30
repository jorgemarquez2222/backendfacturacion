const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const Users = db.sequelize.define('users', {
  id_user: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING },
  user: { type: DataTypes.STRING },
  pass: { type: DataTypes.STRING },
  user_type: { type: DataTypes.STRING },
});

module.exports = {
  Users
}