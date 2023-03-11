const express=require('express')
const router=express.Router()
const userController=require('../controller/user')
const userMiddleware=require('../middleware/userMiddleware')


router.get('/',userMiddleware.validation, userController.getUsers)

module.exports=router