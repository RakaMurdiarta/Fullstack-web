const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();


// /admin/add-product = GET
router.get('/add-product', productsController.getAddProduct)

// /admin/add-product = POST
router.post('/add-product', productsController.postAddProduct)
router.get('/edit-product/:productId', productsController.postEditProduct)
// router.post('/delete-product', productsController.postDeleteProduct)

// router.get('/add-product' ,(req, res, next) => {
//     res.send(
//         '<form action="/product" method="POST"><input type="text" name="tittle"><button type="submit"> Add Product </button></form>'
//     );
// });

// router.post('/product', (req,res,next) => {
//     console.log(req.body.title)
//     res.redirect('/')
// });

module.exports = router;