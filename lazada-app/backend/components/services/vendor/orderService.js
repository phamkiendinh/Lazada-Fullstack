const Order = require("../../models/orderModel.js");

const getAllOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrder = await Order.find();
      resolve({
        status: "OK",
        message: "Success",
        data: allOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateOrder = (product_id, order_id, status) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if the order with the given order_id exists
      const checkOrder = await Order.findById(order_id);
      if (!checkOrder) {
        resolve({
          status: "ERR",
          message: "The order does not exist",
        });
        return;
      }

      // Find the product within the order's items
      const productIndex = checkOrder.items.findIndex(
        (product) => product._id.toString() === product_id
      );

      if (productIndex === -1) {
        resolve({
          status: "ERR",
          message: "The product is not defined in the order",
        });
        return;
      }

      // Update the status of the specific product
      checkOrder.items[productIndex].status = status;

      // Save the updated order
      const updatedOrder = await checkOrder.save();

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllOrder,
  updateOrder,
};
