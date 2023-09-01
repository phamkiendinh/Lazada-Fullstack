"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  avatar: {
    type: String
  },
  city: {
    type: String
  }
}, {
  timestamps: true
});
var Vendor = mongoose.model("Vendor", userSchema);
module.exports = Vendor;