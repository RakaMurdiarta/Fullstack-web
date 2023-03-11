const express=require('express')

const productControl=require('../controller/products')

const router=express.Router()


console.log(productControl);

router.get('/add-product',productControl.getAddProduct)

router.post('/add-product',productControl.postAddProduct)

module.exports=router