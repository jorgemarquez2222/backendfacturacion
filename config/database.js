const Sequelize = require('sequelize')

const sequelize = new Sequelize('facturacion', 'root', 'SERVERpages1844--$$q', {
  host: '159.65.241.58',
  dialect: 'mysql',
})

module.exports = {
    sequelize
}
