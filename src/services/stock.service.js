const httpStatus = require('http-status');
const { Stock } = require('../models');


const createStock = async (stockBody) => {
    return Stock.create(stockBody);
}

const getStockByID = async (id) => {
    return Stock.findById(id);
}

const updateStockByID = async (id, stockBody) => {
    const stock = Stock.getStockByID(id);
    if(!stock){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    Object.assign(stock, stockBody);
    await stock.save();
    return stock;
}

const deleteStockByuserId = async (user_id) => {
    const stock = Stock.getStockByID(user_id);
    await user.remove();
    return stock;
}

module.exports = {
    createStock,
    getStockByID,
    updateStockByID,
    deleteStockByuserId
}

