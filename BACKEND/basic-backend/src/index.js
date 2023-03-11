const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const midllewareLog = require("./middleware/logs.js");
const midllewareRes = require("./middleware/respone");
const midllewarePost = require("./middleware/postmiddle");
const addPost = require("./routes/addPost");

//middleware
// 1

// app.use(midllewareLog.logReq);
// app.use(midllewareRes.logRes);

//2

// app.use(midllewareLog.logReq);

// app.get("/", (req, res) => {
//   res.json({
//     message: "root",
//   });
// });

// app.use(midllewarePost.postMiddle);

// app.use("/user", userRoute);





app.use("/add-product", addPost);
app.use(midllewareLog.logReq)


app.get("/", (req, res) => {
  res.send('product berhasil ditambah')
});

app.listen(8000, () => {
  console.log("berhasil konek");
});
