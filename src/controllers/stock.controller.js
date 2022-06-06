const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stockService } = require('../services');


const createStock = catchAsync(async (req, res) => {
    const stock = await stockService.createStock(req.body);
    res.status(httpStatus.CREATED).send(stock);
});

const getStock = catchAsync(async (req, res) => {
    const stock = await stockService.getStockByID(req.params.userId);
    if(!stock){
        throw new ApiError(httpStatus.NOT_FOUND, 'Stock not found');
    }
    res.send(stock)
});

const updateStock = catchAsync(async (req, res) => {
    const stock = await userService.updateStockById(req.params.userId, req.body);
    res.send(stock);
  });

  const deleteStock = catchAsync(async (req, res) => {
    await stockService.deleteStockById(req.params.userId);
    res.status(httpStatus.NO_CONTENT).send();
  });

  module.exports = {
      createStock,
      getStock,
      updateStock,
      deleteStock
  }