const Sequelize = require('sequelize')

const sequelize = new Sequelize('facturacion', 'admin', 'HOLAcomoestas44--$$', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = {
    sequelize
}
