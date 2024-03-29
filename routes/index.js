var express = require("express");
var router = express.Router();
const db = require("../config/database");
const { Productos, PreciosEfectPunto } = require("../models/productos");

const searProductName = async (name) => {
  const product = await Productos.findAll({ where: {
    nombre: name
  }})
  if(!product.length) return false
  return true
}

router.get("/products", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();

    const products = await Productos.findAll({
      attributes: [
        "id_producto",
        "nombre",
        "precio_paca_dolar",
        "cantidad_por_paca",
        "porcent_dolar",
        "porcent_efect",
        "porcent_punto",
        "cantidad",
      ],
      raw: true,
    });
    res.status(200).json({ products });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

router.post("/product", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();
    const {
      nombre,
      precio_paca_dolar,
      cantidad_por_paca,
      porcent_dolar,
      porcent_efect,
      porcent_punto,
    } = req.body;
    const existProduct = await searProductName(nombre)
    if(existProduct){
      res.status(409).json({ products:[] });
      return
    }
    console.log("existProduct", existProduct)
    const products = await Productos.create({
      nombre,
      precio_paca_dolar,
      cantidad_por_paca,
      porcent_dolar,
      porcent_efect,
      porcent_punto,
    });
    res.json({ products });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

router.put("/product/:id", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();
    console.log("req", req.body);

    const {
      nombre,
      precio_paca_dolar,
      cantidad_por_paca,
      porcent_dolar,
      porcent_efect,
      porcent_punto,
    } = req.body;
    const products = await Productos.update(
      {
        nombre,
        precio_paca_dolar,
        cantidad_por_paca,
        porcent_dolar,
        porcent_efect,
        porcent_punto,
      },
      {
        where: {
          id_producto: parseInt(req.params.id),
        },
      }
    );
    res.json({ products });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

router.delete("/product/:id", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();
    console.log("req", req.params);

    const products = await Productos.destroy({
      where: {
        id_producto: parseInt(req.params.id),
      },
    });
    res.json({ products });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

router.delete("/product/:id", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();
    console.log("req", req.params.id_producto);

    const products = await Productos.destroy({
      where: {
        id_producto: parseInt(req.body.id_producto),
      },
    });
    res.json({ products });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

router.get("/preciosEfectPunto", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();

    const [resp] = await PreciosEfectPunto.findAll({
      attributes: ["id_precio_efect_punto", "precio_efect", "precio_punto"],
      raw: true,
    });
    res.status(200).json({ resp });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

router.put("/preciosEfectPunto/", async function (req, res, next) {
  try {
    const conn = await db.sequelize.authenticate();
    console.log("req", req.body);

    const { id_precio_efect_punto, precio_efect, precio_punto } = req.body;
    const resp = await PreciosEfectPunto.update(
      {
        precio_efect, 
        precio_punto      
      },
      {
        where: {
          id_precio_efect_punto: parseInt(id_precio_efect_punto),
        },
      }
    );
    res.json({ resp });
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

module.exports = router;
