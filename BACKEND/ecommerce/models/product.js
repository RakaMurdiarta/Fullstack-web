const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stars: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reviews: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    featured: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shipping: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    colors: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Product