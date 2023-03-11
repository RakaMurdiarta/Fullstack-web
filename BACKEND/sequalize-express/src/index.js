const express = require("express");

const app = express();
const ProductRouter = require("./routes/admin");
const bodyParser = require("body-parser");
const ShopRouter = require("./routes/shop");
const sequelize = require("./utils/Database");
const User = require("./models/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", ProductRouter);
app.use("/", ShopRouter);

sequelize
  .sync({ alter: true })
  .then((result) => {
    app.listen(8000, () => {
      console.log("success connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res, next) => {
  res.status(404).send("page not found");
});
