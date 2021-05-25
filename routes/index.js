var express = require('express');
var router = express.Router();
const db = require('../config/database')
const { Productos } = require('../models/productos')

router.get('/', async function(req, res, next) {
try {
  const r = await db.sequelize.authenticate()
  console.log('Conectado', r)
  
  const products = await Productos.findAll({ attributes: ['id_producto', 'nombre', 'precio'], raw: true })
  console.log(products); // true
  fs = require('fs');
  fs.writeFile('helloworld.txt', JSON.stringify(products), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
} catch (e) {
    console.log("No conectado")
    console.log(e.stack)
}

  res.render('index', { title: 'Express' });
});

module.exports = router;
