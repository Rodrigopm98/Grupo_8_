const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

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

/* validaciones productCreate */
const validacionesCreate = [
    body("name")
    .notEmpty().withMessage("Debes colocar el nombre del producto").bail()
    .isLength({min : 5}).withMessage("El nombre del producto debe contener al menos 5 caracteres"),
    body("descripcion").isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),
    body("precio").isNumeric().withMessage("El precio debe ser expresado en numero"),
    body("imagenProducto").custom((value, { req })=>{
        let file = req.file;
        let extensionesPermitidas= [".jpg",".jpeg",".png",".gif" ];
        if(!file){
            throw new Error ("Tienes que subir una imagen");
        } else{
            let extensionArchivo = path.extname(file.originalname);
            if(!extensionesPermitidas.includes(extensionArchivo)){
                throw new Error("Solo se permiten extensiones .jpg, .jpeg, .png, .gif")
        } }
        return true;   
        
    })
];

/*validaciones para el productEdit  */
const validacionesEdit = [
    body("name")
    .notEmpty().withMessage("Debes colocar el nombre del producto").bail()
    .isLength({min : 5}).withMessage("El nombre del producto debe contener al menos 5 caracteres"),
    body("description").isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),
    body("price").isNumeric().withMessage("El precio debe ser expresado en numero"),
    body("imagenProducto").custom((value, { req })=>{
        let file = req.file;
        let extensionesPermitidas= [".jpg",".jpeg",".png",".gif" ];
        if(file){
            let extensionArchivo = path.extname(file.originalname);
            if(!extensionesPermitidas.includes(extensionArchivo)){
                throw new Error("Solo se permiten extensiones .jpg, .jpeg, .png, .gif")
        } }
        return true;   
        
    })
];

/* importando controlador */
const productController= require("../controller/productController");

router.get("/", productController.products);
router.get("/hombres", productController.hombres);
router.get("/mujeres", productController.mujeres);
router.get("/ninios", productController.ninios);
router.get("/deportes", productController.deportes);
router.get("/misProductos", productController.misProductos)



router.get("/search", productController.search); 

router.get("/productDetail/:id", productController.detail);
router.get("/productCart", productController.cart);

router.get("/productCreate", productController.create);
router.post("/",  fileUpload.single("imagenProducto") ,validacionesCreate, productController.store);

router.get("/productEdit/:id", productController.edit);
router.post("/productEdit/:id", fileUpload.single("imagenProducto"), validacionesEdit, productController.update);

router.post("/productDetail/:id", productController.destroy)


module.exports= router;