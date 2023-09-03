const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }
);

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    items: [itemSchema],
    shippingFee: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
