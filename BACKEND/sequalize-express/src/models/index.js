const product = require("./product");
const cart = require("./cart");
const cartItem = require("./cartItems");
const users = require("./users");
const imagesProducts = require("./imagesProducts");
const { Association } = require("sequelize");

const Model = {};

Model.product = product;
Model.cart = cart;
Model.cartItem = cartItem;
Model.users = users;
Model.imagesProducts = imagesProducts;

//  Association or relation in sequelize

users.hasOne(cart);
cart.belongsTo(users);

users.hasMany(product, {
  constraints: true,
  onDelete: "CASCADE",
});

product.belongsTo(users);

cart.belongsToMany(product, { through: cartItem });
product.belongsToMany(cart, { through: cartItem });

module.exports = Model;
