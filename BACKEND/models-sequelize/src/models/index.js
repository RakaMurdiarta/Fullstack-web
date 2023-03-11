const db = require("../config/db.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const dbConnect = {};

dbConnect.Sequelize = Sequelize;
dbConnect.sequelize = sequelize;

dbConnect.product = require("./productModels")(sequelize, DataTypes);
dbConnect.review = require("./reviewModels")(sequelize, DataTypes);

dbConnect.sequelize.sync().then(() => {
  console.log("table created");
});


module.exports = dbConnect;
