const express = require("express");
const app = express();
const rootRoute = require("./routes/root");
const MdOne = require('./middleware/handleOne');

console.log({MdOne});
app.use("/", rootRoute);

app.listen(8002, () => {
  console.log("listening port 8002");
});
