const express = require("express");

const controller = require("../controller");

const router = express.Router();

router.get("/add-product", controller.productController.getAddProduct);

router.get("/products", controller.productController.getAllProduct);

router.get("/products/:id", controller.productController.getOneProduct);

router.get("/edit-product/:id", controller.productController.getEditProduct);

router.post("/add-product", controller.productController.postAddProduct);

router.get("/cart", controller.cartController.getAllCarts);

router.get("/cartItem", controller.cartItemController.getAllCartItems);

router.get("/users", controller.usersController.getAllUsers);

router.get("/images", controller.imagesController.getAllImagesProduct);

module.exports = router;
