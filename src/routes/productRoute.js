const express = require("express");
const router = express.Router();

/* importando controlador */
const productController= require("../controller/productController");

router.get("/", productController.products)
router.get("/productDetail/:id", productController.detail);
router.get("/productCart", productController.cart);
router.get("/productCreate", productController.create);
router.get("/productEdit/:id", productController.edit);

module.exports= router;