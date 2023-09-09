"use strict";

var Product = require("../../models/productModel.js");

var getDetailsProduct = function getDetailsProduct(id) {
  return new Promise(function _callee(resolve, reject) {
    var product;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(Product.findOne({
              _id: id
            }));

          case 3:
            product = _context.sent;

            if (product === null) {
              resolve({
                status: "ERR",
                message: "The product is not defined"
              });
            }

            resolve({
              status: "OK",
              message: "SUCESS",
              data: product
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

var getAllProduct = function getAllProduct() {
  var products;
  return regeneratorRuntime.async(function getAllProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Product.find());

        case 3:
          products = _context2.sent;
          return _context2.abrupt("return", {
            status: "OK",
            message: "Success",
            data: products
          });

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getAllType = function getAllType() {
  return new Promise(function _callee2(resolve, reject) {
    var allType;
    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Product.distinct("type"));

          case 3:
            allType = _context3.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allType
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

module.exports = {
  getDetailsProduct: getDetailsProduct,
  getAllProduct: getAllProduct,
  getAllType: getAllType
};