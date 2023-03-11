const productController = require("./products");
const cartController = require("./cart");
const cartItemController = require("./cartItems");
const usersController = require("./users");
const imagesController = require("./imagesProducts");



const controller = {};

controller.productController = productController;
controller.cartController = cartController;
controller.cartItemController = cartItemController;
controller.usersController=usersController
controller.imagesController=imagesController



module.exports = controller;
