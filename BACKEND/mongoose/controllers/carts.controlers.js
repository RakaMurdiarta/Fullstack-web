const cartsModel = require("../models/cart.models");

exports.addCart = (req, res) => {
  const Userid = req.body.userId;
  const cart = new cartsModel({
    userId: Userid,
  });
  cart
    .save()
    .then((data) => {
      res.json({ msg: "Add Cart" });
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
