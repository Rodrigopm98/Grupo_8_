const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let productImage = path.join(__dirname, "../../public/images");
        cb(null, productImage);
    },
    filename: (req, file, cb)=>{
        let nombreImagen= Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen)
    }
});
let fileUpload = multer({storage: multerDiskStorage})

/* importando controlador */
const productController= require("../controller/productController");

router.get("/", productController.products)
router.get("/productDetail/:id", productController.detail);
router.get("/productCart", productController.cart);

router.get("/productCreate", productController.create);
router.post("/",  fileUpload.single("imagenProducto") ,productController.store);

router.get("/productEdit/:id", productController.edit);
router.put("/productEdit/:id", productController.update);

router.delete("/productEdit/:id", productController.destroy)


module.exports= router;