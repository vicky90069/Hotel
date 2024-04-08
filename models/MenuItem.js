const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    test: {
        type: String,
        enum: ['sweet', 'spicy', 'soup'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: String,
        default: [],
    },
    num_sell: {
        type: Number,
        default: 0,
    }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema); // Use mongoose.model to create a model

module.exports = MenuItem; // Export the model
