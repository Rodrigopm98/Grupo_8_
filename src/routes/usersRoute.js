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
    body("nombre").notEmpty().withMessage("Debes completar el campo de nombre"),
    body("apellido").notEmpty().withMessage("Debes completar el campo de apellido"),
    body("usuario").notEmpty().withMessage("Debes completar el campo de Nombre de usuario"),
    body("email").isEmail().withMessage("Debes completar un email válido"),
    body("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
];

const validacionesLogin = [
    body("email").isEmail().withMessage("Email invalido"),
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



module.exports = router;
