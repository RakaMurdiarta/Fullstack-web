const express = require("express");

const app = express();
const ProductRouter = require("./routes/admin");
const bodyParser=require('body-parser')
const ShopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({extended:false}))

console.log(ProductRouter);

app.use("/admin", ProductRouter);
app.use("/", ShopRouter);

app.listen(8001, () => {
  console.log("konek");
});
