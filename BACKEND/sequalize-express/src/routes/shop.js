const express = require("express");

const shopController=require('../controller')
const router = express.Router();

router.get("/shop", shopController.productController.getAllProduct);

module.exports = router;
