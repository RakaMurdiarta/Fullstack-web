const model = require("../models");

const getAllCartItems = async (req, res) => {
  try {
    let cartItems = await model.cartItem.findAll();
    if (cartItems.length > 0) {
      res.status(200).json({
        message: "All Data CartItems",
        data: cartItems,
      });
    } else {
      res.status(200).json({
        message: "Empty",
        data: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { getAllCartItems };
