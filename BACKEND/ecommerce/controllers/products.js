const Product = require("../models/product.js")

const products = [];


exports.getAddProduct = (req,res,next) => {
    res.send (
        '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
};

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const stock = req.body.stock;
    const stars = req.body.stars;
    const reviews = req.body.reviews;
    const company = req.body.company;
    const featured = req.body.featured;
    const shipping = req.body.shipping;
    const category = req.body.category;
    const colors = req.body.colors;
    req.user
        .createProduct({
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description,
            stock: stock,
            stars: stars,
            reviews: reviews,
            company: company,
            featured: featured,
            shipping: shipping,
            category: category,
            colors: colors
    })
    .then(result => {
        if (result) {
            res.json({data: result})
        } else {
            res.json({data : "Gagal"})
        }
        
    })
    .catch(err => {
        console.log(err)
    })
   
};

exports.getProducts = (req,res,next) => {
    // res.json({data: products, total: products.length});
    req.user
    .getProducts()
    .then(products => {
        console.log(products[0].colors)
        // res.json(JSON.stringify(products))
    })
    .catch(err => console.log(err))
};

exports.postEditProduct = (req,res,next) => {
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/')
    }
    const prodId = req.params.productId
    req.user
    .getProducts({ where :{ id: prodId} })
    // const updateTitle = req.body.title
    // const updatePrice = req.body.price
    // const updateImageUrl = req.body.imageUrl
    // const updateDesc = req.body.description
    // Product.findByPk(prodId)
    .then (products => {
        // product.title = updateTitle
        // product.imageUrl = updateImageUrl
        // product.description = updateDesc
        // product.price = updatePrice
        // return product.save()
        const product = products[0]
        if (!product) {
            return res.redirect('/')
        }
        res.render('admin/edit-product/:productId', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    })
    // .then(result => {
    //     console.log('UPDATED PRODUCT!')
    //     res.json(result)
    // })
    .catch(err => console.log(err))
}

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






    