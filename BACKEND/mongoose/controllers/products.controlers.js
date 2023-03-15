const ProductModel = require("../models/product.models");

exports.addProduct = (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  const sdsdps=re

  const products = new ProductModel({
    title,
    price,
    description,
    imageUrl,
  });
  products
    .save()
    .then((data) => {
      res.json({ msg: "Add Products" });
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

exports.getProduct = (req, res) => {
  ProductModel.find({ title: "Bajuu" }, "price description -_id").then(
    (user) => {
      res.json({ data: user[0] });
    }
  );
};
