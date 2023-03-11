const express = require('express')

const route=express.Router()
const {product} = require('../controllers')





route.get('/product', product.getAllProduct)


module.exports=route

