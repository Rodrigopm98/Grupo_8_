const express = require("express");
const router = express.Router();

const apiMainController = require("../../controller/api/apiMainController.js");

router.get("/users", apiMainController.userList);
router.get("/products", apiMainController.productList);

module.exports = router;