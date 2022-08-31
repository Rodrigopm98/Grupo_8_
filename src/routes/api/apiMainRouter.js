const express = require("express");
const router = express.Router();

const apiMainController = require("../../controller/api/apiMainController.js");

router.get("/users", apiMainController.userList);
router.get("/users/:id", apiMainController.userDetail);
router.get("/products", apiMainController.productList);
router.get("/products/:id", apiMainController.productDetail)

module.exports = router;