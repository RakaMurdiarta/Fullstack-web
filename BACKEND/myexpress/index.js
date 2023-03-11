const express = require("express");
const app = express();
const router = express.Router();

const bodyParser = require("body-parser");

console.log("start express server");

// app.get("/", function (req, res) {
//   res.send("Welcome to Koding Akademi");
// });

//Middleware

// app.use("/user/:id", (req, res, next) => {
//   console.log(`Reg Type`, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`Time`, Date.now());
//   next();
// });

// app.get("/user/:id", (req, res, next) => {
//   res.send("USER");
// });

// router.use((req, res, next) => {
//   console.log(`Time`, Date.now());
//   next();
// });

// router.get(`/user/:id`, (req, res, next) => {
//   res.send("Hello from Router");
// });

// app.use("/", router);

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(7000);
