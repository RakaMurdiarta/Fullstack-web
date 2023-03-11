const models = require("../models");
const products = [];
const imageProduct = require("../models/imagesProducts");

const { Op } = require("sequelize");

const getAddProduct = (req, res) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><label htmlFor="title">Title</label><input type="text" name="title" /><button type="submit">Add</button></form>'
  );
};

const postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const userId = req.body.userId;
  const stock = req.body.stock;
  const stars = req.body.stars;
  const reviews = req.body.reviews;
  const company = req.body.company;
  const featured = req.body.featured;
  const shipping = req.body.shipping;
  const category = req.body.category;
  const colors = req.body.colors;

  models.product
    .create({
      title,
      imageUrl,
      price,
      description,
      userId,
      stock,
      stars,
      reviews,
      company,
      featured,
      shipping,
      category,
      colors,
    })
    .then((result) => {
      console.log("ini", result.toJSON());
      console.log("create");
      res.redirect("/shop");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllProduct = (req, res) => {
  models.product
    .findAll()
    .then((result) => {
      if (result.length > 0) {
        result.map((item) => {
          item.colors = item.colors.split(",");
        });
        res.status(200).json({
          message: "All Product",
          data: result,
          totalData: result.length,
        });
      } else {
        res.status(200).json({
          message: "Empty",
          data: [],
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const getOneProduct = (req, res) => {
  const id = req.params.id;

  models.product
    .findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Data Found",
          data: result,
        });
      } else {
        res.json({
          message: "Data Not Found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

const getEditProduct = (req, res) => {
  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.id;
  console.log(req.params.id);

  req.user
    .getProduct({
      where: {
        id: prodId,
      },
    })
    .then((results) => {
      const product = results[0];

      if (!product) {
        return res.redirect("/");
      }

      res.json({
        data : product
      })
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAddProduct,
  postAddProduct,
  getAllProduct,
  getOneProduct,
  getEditProduct,
};
