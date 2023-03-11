const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const ShopRoutes = require("./routes/shop");
const ProductsRoutes = require("./routes/admin");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/users");
const Cart = require("./models/cart");
const CartItems = require("./models/cartitems");
const imagesProducts = require("./models/imagesProducts");
const Orders = require("./models/orders");
const OrderItems = require("./models/orderItems");

Product.belongsTo(User, { onDelete: "CASCADE" });
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Product.hasMany(imagesProducts);
imagesProducts.belongsTo(Product);

Cart.belongsToMany(Product, { through: CartItems });

Orders.belongsToMany(Product, { through: OrderItems });

User.hasMany(Orders);
Orders.belongsTo(User);

app.use((req, res, next) => {
  console.log(req);
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      req.stars = 20;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/admin", ProductsRoutes);
app.use("/shop", ShopRoutes);


sequelize
  .sync({ alter: true }) // {force: true} create foreign key otomatis
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "raka", email: "raka@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    return user.createCart();
  })
  .then((cart) => {
    app.listen(8000, () => {
      console.log("server connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
  next();
});
