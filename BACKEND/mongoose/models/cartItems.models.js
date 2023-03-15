const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemsShema = new Schema({
  quantity: {
    type: Number,
    require: true,
  },
  cartId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "carts",
    },
  ],
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  prod_name: {
    type: String,
  },
  color: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const cartItems = mongoose.model("cartItems", cartItemsShema);

module.exports = cartItems;
