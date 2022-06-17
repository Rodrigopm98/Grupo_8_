const express = require("express");
const router = express.Router();

/* importando controlador */
const productController= require("../controller/productController");

router.get("/", productController.products)
router.get("/productDetail/:id", productController.detail);
router.get("/productCart", productController.cart);

router.get("/productCreate", productController.create);
router.post("/", productController.store);

router.get("/productEdit/:id", productController.edit);
router.put("/productEdit/:id", productController.update);

router.delete("/productEdit/:id", productController.destroy)


module.exports= router;