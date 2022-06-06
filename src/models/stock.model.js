const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const stockSchema = mongoose.schema({
    id: {
        type: Number,
        required: true
    },
    type: {
        type: String
    },
    user_id: {
        type: Number
    },
    symbol: {
        type: String
    },
    shares: {
        type: Number
    },
    price: {
        type: Number
    },
    timestamp: {
        type: Number
    }
})

stockSchema.plugin(toJSON);
stockSchema.plugin(paginate);

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;