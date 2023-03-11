module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      price: {
        type: DataTypes.INTEGER,
      },
      descriptions: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Review;
};
    