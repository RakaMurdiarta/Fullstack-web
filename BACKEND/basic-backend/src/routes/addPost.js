const express = require("express");
const router = express.Router();
const add=require('../controller/post.js')



router.get("/", add.post);

router.post('/post',add.posting)

// router.post('/:id',controllerRespon.postUser)

module.exports=router