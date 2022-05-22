const { Schema, model } =  require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ItemSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt:  {
            type: Date,
            default: Date.now,
            get: createdAtVal  => dateFormat(createdAtVal)
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Item = model('Item', ItemSchema);

module.exports = Item;
