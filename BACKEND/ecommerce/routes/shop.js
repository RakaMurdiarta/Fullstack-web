const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);
router.get("/product/:id", shopController.getProduct);
router.get("/products", shopController.getProducts);
router.get("/product/:id/delete", productsController.postDeleteProduct);
router.post("/addtocart", shopController.postAddCart);
router.post("/cartitems/delete", shopController.postCartDeleteProduct);
router.get("/createOrder", shopController.postOrder);
router.get("/orders", shopController.Order);
router.get("/cart", shopController.getCart);




// router.get('/', (req,res,next) => {
//     res.send("<h1>Hello Buyer </h1>");
// });

module.exports = router;
