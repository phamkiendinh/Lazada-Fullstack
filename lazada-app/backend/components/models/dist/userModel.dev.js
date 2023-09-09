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
    type: Number,
    unique: true
  }
}, {
  timestamps: true
});
var User = mongoose.model("Customer", userSchema);
module.exports = User;