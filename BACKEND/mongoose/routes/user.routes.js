const express = require("express");
const UserAdd = require("../controllers/users.controllers");
const products = require("../controllers/products.controlers");


const router = express.Router();

router.post("/addUser", UserAdd.AddUser);
router.get("/getUser", UserAdd.getUsers);
router.get("/getProduct", products.getProduct);
router.post("/addProduct", products.addProduct);




module.exports = router;