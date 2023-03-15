const express = require("express");
const cartAdd = require("../controllers/carts.controlers");
const router = express.Router();

router.post("/addcart", cartAdd.addCart);
// router.get("/getUser", cartAdd.getUsers);

module.exports = router;
