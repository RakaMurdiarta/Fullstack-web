const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  nama: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", usersSchema);
