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
  // isAdmin: { type: Boolean, default: false, required: true },
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
var User = mongoose.model("User", userSchema);
module.exports = User;