"use strict";

var ProductService = require("../../services/customer/productService.js");

var getDetailsProduct = function getDetailsProduct(req, res) {
  var productId, response;
  return regeneratorRuntime.async(function getDetailsProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          productId = req.params.id;

          if (productId) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The productId is required"
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(ProductService.getDetailsProduct(productId));

        case 6:
          response = _context.sent;
          return _context.abrupt("return", res.status(200).json(response));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(404).json({
            message: _context.t0
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var getAllProduct = function getAllProduct(req, res) {
  var _req$query, limit, page, sort, filter, response;

  return regeneratorRuntime.async(function getAllProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, limit = _req$query.limit, page = _req$query.page, sort = _req$query.sort, filter = _req$query.filter;
          _context2.next = 4;
          return regeneratorRuntime.awrap(ProductService.getAllProduct(Number(limit) || null, Number(page) || 0, sort, filter));

        case 4:
          response = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(response));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(404).json({
            message: _context2.t0
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getAllType = function getAllType(req, res) {
  var response;
  return regeneratorRuntime.async(function getAllType$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(ProductService.getAllType());

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(response));

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(404).json({
            message: _context3.t0
          }));

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = {
  getDetailsProduct: getDetailsProduct,
  getAllProduct: getAllProduct,
  getAllType: getAllType
};