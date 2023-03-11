const Sequelize = require("sequelize");

const sequelize = require("../utils/Database");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    stars: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    reviews: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    featured: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    shipping: {
      type: Sequelize.INTEGER,
      allowNull: false,
      set(value) {
        this.setDataValue("shipping", this.id + value);
      },
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    colors: {
      type: Sequelize.STRING,
      allowNull: false,

      // get() {
      //   const getColors = this.getDataValue("colors").split(",");
      //   console.log({ getColors });
      //   return getColors;
      // },
      // set(value) {
      //   this.setDataValue("colors", value);
      // },
    },
  },
  {
    freezeTableName: false,
  }
);

module.exports = Product;
