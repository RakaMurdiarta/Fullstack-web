const db = require("../models");

const controller = {};

const Product = db.product;

controller.getAllProduct = async (req, res) => {
  try {
    let product = await Product.findAll();
    if (product.length > 0) {
      res.status(200).json({
        message: "All Product",
        data: product,
      });
    } else {
      res.status(200).json({
        message: "Product Not Found",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Page Not Found",
      server: error,
    });
  }
};

module.exports=controller
