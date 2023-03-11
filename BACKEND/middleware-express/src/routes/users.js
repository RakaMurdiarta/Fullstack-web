const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/add-user", userController.addUser);

router.post("/add-user", userController.postAddUser);

module.exports = router;
