const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'item'
    }
)

module.exports = Item;