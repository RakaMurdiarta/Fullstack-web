const Product = require("../models/product");
const Cart = require("../models/cart");
const User = require("../models/users");
const { Op } = require("sequelize");
const ImagesProducts = require("../models/imagesProducts");
const orderItems = require("../models/orderItems");

exports.getIndex = (req, res, next) => {
  Product.findAll({
    include: [{ model: ImagesProducts }],
  })
    .then((products) => {
      products.map((items) => {
        {
          items.colors = items.colors.split(",");
        }
      });
      res.json({ data: products, total: products.length });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  console.log(req.stars);
  User.findAll({
    include: [
      {
        model: Product,
        where: {
          stars: { [Op.gt]: req.stars },
        },
      },
    ],
  }).then((result) => {
    res.json(result);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.findByPk(prodId)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          res.send(JSON.stringify(products));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postAddCart = (req, res, next) => {
  const prodId = req.body.productId;
  const newquantity = req.body.quantity;
  const color = req.body.colors;
  req.user
    .getCart()
    .then((cart) => {
      cart
        .getProducts({ where: { id: prodId } })
        .then((cart_items) => {
          if (cart_items.length >= 1) {
            const addquantity =
              parseInt(newquantity) +
              parseInt(cart_items[0].cartitems.quantity); //ganti mejadi int
            Product.findByPk(prodId).then((new_product) => {
              cart
                .addProduct(new_product, {
                  through: { quantity: addquantity },
                })
                .then((result) => {
                  res.status(200).json({
                    msg: "success",
                    data: result,
                  });
                });
            });
          } else {
            Product.findByPk(prodId).then((new_product) => {
              console.log(new_product);
              cart
                .addProduct(new_product, {
                  through: {
                    quantity: newquantity,
                    price: new_product.price,
                    color: color,
                    prod_name: new_product.title,
                  },
                })
                .then((result) => {
                  res.send(result);
                });
            });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts({ where: { id: prodId } })
        .then((product) => {
          if (product.length > 0) {
            cart.removeProducts(product[0]).then((cart) => {
              res.json({ msg: "Remove Success" });
            });
          } else {
            res.json({ msg: "Failed Remove" });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postOrder = (req, res) => {
  req.user.getCart().then((cart) => {
    cart.getProducts().then((products) => {
      req.user.createOrder().then((order) => {
        if (products.length > 0) {
          products.map((product) => {
            orderItems
              .findAll({
                where: {
                  productId: product.cartitems.productId,
                },
              })
              .then((data) => {
                if (data.length > 0) {
                  data.map((item) => {
                    {
                      item.quantity =
                        parseInt(item.quantity) +
                        parseInt(product.cartitems.quantity);
                    }
                  });
                  // ord
                  //   .create(product, {
                  //     through: {
                  //       quantity:
                  //         parseInt(product.cartitems.quantity) +
                  //         parseInt(product.cartitems.quantity),
                  //     },

                  //   })

                  res.send(data);
                } else {
                  order
                    .addProduct(product, {
                      through: {
                        quantity: parseInt(product.cartitems.quantity),
                      },
                    })
                    .then((result) => {
                      console.log("berhasil add");
                    });
                }
              });
          });
          // res.json({product : product.productId})
          // products.map((product) => {

          // });
        } else {
          // res.json({
          //   msg: "Product Tidak Ditemukan",
          // });
        }
        // res.json({ msg: "success" });
      });
    });
  });
};

exports.Order = (req, res) => {
  const orderitems = [];
  req.user
    .getOrders({
      where: {
        id: 1,
      },
    })
    .then((orders) => {
      // orders jarena yang dihasilkan dalam bentuk array maka tidak bisa di gunakan magic method
      // orders[orders.length - 1].getProducts().then((products) => {
      //   res.json(products)

      //   // products.map((product) => {
      //   //   orderitems.push(product.orderitem);
      //   // });
      //   // res.json({ data: orderitems });
      // });
      res.json({ orders });
    });
  // User.findAll({
  //   include: {
  //     model: OrdersItems,
  //   },
  // }).then((data) => res.json({ data }));
};
