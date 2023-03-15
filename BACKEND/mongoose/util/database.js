const mongoose = require("mongoose");

function connectToDatabase() {
  return mongoose.connect(
    "mongodb+srv://rakamurdiarta:12345@cluster0.hp5kc0x.mongodb.net/coba",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

module.exports = connectToDatabase;
