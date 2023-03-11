const model = require("../models");

const getAllCarts = async (req, res) => {
  try {
    let cart = await model.cart.findAll();
    if (cart.length > 0) {
      res.status(200).json({
        message: "All Data Cart",
        data: cart,
      });
    } else {
      res.status(200).json({
        message: "Empty Cart",
        data: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { getAllCarts };
