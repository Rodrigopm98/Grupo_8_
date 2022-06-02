const express = require("express");
const router = express.Router();

/* importando controlador */
const productController= require("../controller/productController");

router.get("/productDetail", productController.detail);
router.get("/productCart", productController.cart);
router.get("/productCreate", productController.create);
router.get("/productEdit", productController.edit);

module.exports= router;