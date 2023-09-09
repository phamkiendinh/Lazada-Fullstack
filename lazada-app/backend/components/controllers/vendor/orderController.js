const OrderService = require("../../services/vendor/orderService.js");

const getAllOrder = async (req, res) => {
  try {
    const data = await OrderService.getAllOrder();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { productId, orderId, status } = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "The productId is required",
      });
    }
    if (!orderId) {
      return res.status(200).json({
        status: "ERR",
        message: "The orderId is required",
      });
    }
    if (!status) {
      return res.status(200).json({
        status: "ERR",
        message: "The Status is required",
      });
    }
    const response = await OrderService.updateOrder(productId, orderId, status);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  getAllOrder,
  updateOrder,
};
