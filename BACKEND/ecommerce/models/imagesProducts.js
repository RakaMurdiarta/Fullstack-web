const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const imagesProducts = sequelize.define('images_products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    width: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    filename: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

module.exports = imagesProducts