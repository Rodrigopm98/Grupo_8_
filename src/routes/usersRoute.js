const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

let guestMiddleware = require('../middlewares/guestMiddleware');
let authMiddleware = require('../middlewares/authMiddleware');


let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let profileImages = path.join(__dirname, "../../public/images/profileImages");
        cb(null, profileImages);
    },
    filename: (req, file, cb) => {
        let nombreImagen = Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen)
    }
});
let fileUpload = multer({ storage: multerDiskStorage })

const usersController = require("../controller/usersController");
const { nextTick } = require("process");

// validaciones para la creacion de usuarios
const validacionesRegister = [
    body("firstName").notEmpty().withMessage("Debes completar el campo de nombre").bail()
    .isLength({ min: 2 }).withMessage("El campo de nombre debe contener al menos 2 caracteres"),

    body("lastName").notEmpty().withMessage("Debes completar el campo de apellido").bail()
    .isLength({ min: 2 }).withMessage("El campo de nombre debe contener al menos 2 caracteres"),

    body("userName").notEmpty().withMessage("Debes completar el campo de Nombre de usuario"),

    body("email").notEmpty().withMessage("Debes completar un correo electrónico").bail()
    .isEmail().withMessage("Debes completar un email válido"),

    body("password").notEmpty().withMessage("Debes escribir una contraseña").bail().isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres").bail()
    .isUppercase({min: 1}).withMessage("La contraseña debe contar al menos con una mayúscula"),

    body("province").notEmpty().withMessage("Debes completar este campo"),

    body("city").notEmpty().withMessage("Debes completar la localidad"),

    body("address").notEmpty().withMessage("Debes completar la información de tu domicilio"),

    body("imagenUsuario").custom((value, { req })=>{
        let file = req.file;
        let extensionesPermitidas= [".jpg",".jpeg",".png",".gif" ];
        if(file){
            let extensionArchivo = path.extname(file.originalname)
            if (!extensionesPermitidas.includes(extensionArchivo)){
                throw new Error("Sólo se permiten extensiones .jpg, .jpeg, .png, .gif");
        } 
    }
        return true;   
    })
];

const validacionesLogin = [
    body("email")
    .notEmpty().withMessage("Debes colocar tu email").bail()
    .isEmail().withMessage("Email invalido"),
    body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
];

/* rutas para registrar usuarios */
router.get("/register", guestMiddleware, usersController.register);
router.post("/register", fileUpload.single("imagenUsuario"), validacionesRegister , usersController.procesarFormulario);

/* rutas para loguear usuarios con session */
router.get("/login", authMiddleware, usersController.login);
router.post("/login", validacionesLogin, usersController.processLogin);

/* perfil de usuario  */
router.get("/perfilUsuario", usersController.perfil);
router.get("/perfilUsuario/cerrarSession", usersController.cerrarSession);


module.exports = router;
