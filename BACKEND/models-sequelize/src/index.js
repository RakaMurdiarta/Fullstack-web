const express = require("express");
const cors = require("cors");
const app = express();
const productRoute = require("./routes/mahasiswaRoute");

var corsOptions = {
  origin: "https://localhost:8081",
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing

app.use(productRoute);

//server

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Success");
});
