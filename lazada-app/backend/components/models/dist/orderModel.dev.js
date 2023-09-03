"use strict";

var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
var orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  items: [itemSchema],
  shippingFee: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var Order = mongoose.model("Order", orderSchema);
module.exports = Order;