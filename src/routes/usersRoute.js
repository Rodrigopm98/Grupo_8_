const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let profileImages = path.join(__dirname, "../../public/images/profileImages");
        cb(null, profileImages);
    },
    filename: (req, file, cb)=>{
        let nombreImagen= Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen)
    }
});
let fileUpload = multer({storage: multerDiskStorage})

const usersController= require("../controller/usersController");


router.get("/", usersController.register);
router.post("/", fileUpload.single("imagenUsuario"), usersController.procesarFormulario)


module.exports= router;

