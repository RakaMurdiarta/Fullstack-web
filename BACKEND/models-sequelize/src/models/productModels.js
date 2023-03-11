const product = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      descriptions: {
        type: DataTypes.TEXT,
      },
      published: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Product;
};

module.exports = product;
