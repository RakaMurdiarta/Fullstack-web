const express = require("express");
const router = express.Router();
const controllerRespon=require('../controller/users')


router.get("/", controllerRespon.getAllUser);

router.post('/:id',controllerRespon.postUser)

module.exports=router
