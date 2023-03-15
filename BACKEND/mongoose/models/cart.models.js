const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const cart = mongoose.model("carts", cartSchema);

module.exports = cart;
