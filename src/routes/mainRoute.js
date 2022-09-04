/* creando el enrutador con express */
const express = require("express");
const router = express.Router();

/* importando var del mainController */
const mainController = require("../controller/mainController");

router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/ayuda", mainController.ayuda);
router.get("/terminosCondiciones", mainController.terminosCondiciones);



module.exports= router;



