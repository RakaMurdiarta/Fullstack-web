const Product = require("../models/product.js")

exports.postDeleteProduct = (req,res,next) => {
    const prodId = req.params.id;
    Product.findByPk(prodId)
    .then(product => {
        return product.destroy();
    })
    .then(result => {
        console.log("DESTROYED PRODUCT")
        res.json(result)
    })
    .catch(err => console.log(err)) //array split
}