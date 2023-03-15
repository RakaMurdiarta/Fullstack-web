const usersModel = require("../models/users.model");


exports.AddUser = (req, res) => {
  const nama = req.body.nama;
  const email = req.body.email;
  const user = new usersModel({
    nama: nama,
    email: email,
  });
  user
    .save()
    .then((data) => {
      res.json({ msg: "Add User Connected" });
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

exports.getUsers = (req, res) => {
  usersModel.find().then((user) => {
    res.json({ data: user });
  });
};

exports.createCart = (req,res)=>{
  usersModel.findOne().then(user=>{
    user.create()
  })
}
