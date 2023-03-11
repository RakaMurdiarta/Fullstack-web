const express=require('express')

const route=express.Router()

const MdOne=require('../middleware/handleOne')



route.get('/',MdOne.handleOneMd)

route.post('/posts/:id',MdOne.handleParams)

route.get('/post',MdOne.getParams)

route.get('/print',MdOne.queryParams)

route.get('/add',MdOne.queryParamsMulti)




module.exports=route