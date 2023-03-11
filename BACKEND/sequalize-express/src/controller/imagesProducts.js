const model = require("../models");

const getAllImagesProduct = async (req, res) => {
  try {
    let imagesProduct = await model.imagesProducts.findAll();
    if (imagesProduct.length > 0) {
      res.status(200).json({
        message: "All Data",
        data: imagesProduct,
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

module.exports = { getAllImagesProduct };
