/* creando el enrutador con express */
const express = require("express");
const router = express.Router();

/* importando var del mainController */
const mainController = require("../controller/mainController");

router.get("/", mainController.index);

module.exports= router;



