const model = require("../models");

const getAllUsers = async (req, res) => {
  try {
    let users = await model.users.findAll();
    if (users.length > 0) {
      res.status(200).json({
        message: "All Data Users",
        data: users,
      });
    } else {
      res.status(200).json({
        message: "Empty",
        data: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { getAllUsers };
