const express=require('express')

const productControl=require('../controller/products')
const router=express.Router()

router.get('/', productControl.getProduct)

module.exports=router