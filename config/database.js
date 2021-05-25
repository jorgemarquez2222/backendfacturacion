const Sequelize = require('sequelize')

const sequelize = new Sequelize('facturacion', 'root', 'SERVERpages1844--$$q', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = {
    sequelize
}
