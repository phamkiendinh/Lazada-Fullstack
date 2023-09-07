"use strict";

var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  countInStock: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  discount: {
    type: Number
  },
  selled: {
    type: Number
  },
  // images: [{ type: String, required: true }],
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  // price_before_discount: { type: Number, required: true },
  // quantity: { type: Number, required: true },
  // sold: { type: Number, required: true },
  // view: { type: Number, required: true },
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  image: {
    type: String,
    required: true
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true
  }
}, {
  timestamps: true
});
var Product = mongoose.model("Product", productSchema);
module.exports = Product;