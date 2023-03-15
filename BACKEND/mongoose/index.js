const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserRouter = require("./routes/user.routes");
const cartRouter = require("./routes/cart.routes");
const connectToDatabase = require("./util/database");
const User = require('./models/users.model')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  User.findOne({ nama: "raka" })
    .then((user) => {
      req.user = user;
      console.log("ddf", user);
      next();
    })
    .catch((err) => console.log(err));
});

connectToDatabase()
  .then(() => {
    User.find({ nama: "harris" }).then((user) => {
      if (user.length > 0) {
        console.log(user);
      } else {
        const user = new User({
          nama: "harris",
          email: "harris@gmail.com",
        });
        user.save();
      }
    });
    console.log("Berhasil terhubung ke database MongoDB.");
  })
  .catch((error) => {
    console.error("Gagal terhubung ke database MongoDB:", error.message);
  });

app.use("/admin", UserRouter);
app.use("/admin", cartRouter);

app.listen(8000, () => {
  console.log(connectToDatabase);
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
  next();
});
