const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const OrderItems = sequelize.define('orderitem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    }
})

module.exports = OrderItems