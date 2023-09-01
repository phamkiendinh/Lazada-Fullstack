"use strict";

var ProductService = require("../../services/vendor/productService.js");

var createProduct = function createProduct(req, res) {
  var _req$body, name, image, type, countInStock, price, rating, description, discount, response;

  return regeneratorRuntime.async(function createProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, image = _req$body.image, type = _req$body.type, countInStock = _req$body.countInStock, price = _req$body.price, rating = _req$body.rating, description = _req$body.description, discount = _req$body.discount;

          if (!(!name || !image || !type || !countInStock || !price || !rating || !discount)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The input is required"
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(ProductService.createProduct(req.body));

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

var updateProduct = function updateProduct(req, res) {
  var productId, data, response;
  return regeneratorRuntime.async(function updateProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          productId = req.params.id;
          data = req.body;

          if (productId) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The productId is required"
          }));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(ProductService.updateProduct(productId, data));

        case 7:
          response = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(response));

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(404).json({
            message: _context2.t0
          }));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var getDetailsProduct = function getDetailsProduct(req, res) {
  var productId, response;
  return regeneratorRuntime.async(function getDetailsProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          productId = req.params.id;

          if (productId) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The productId is required"
          }));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(ProductService.getDetailsProduct(productId));

        case 6:
          response = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(response));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(404).json({
            message: _context3.t0
          }));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var deleteProduct = function deleteProduct(req, res) {
  var productId, response;
  return regeneratorRuntime.async(function deleteProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          productId = req.params.id;

          if (productId) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The productId is required"
          }));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(ProductService.deleteProduct(productId));

        case 6:
          response = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(response));

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(404).json({
            message: _context4.t0
          }));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var deleteMany = function deleteMany(req, res) {
  var ids, response;
  return regeneratorRuntime.async(function deleteMany$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          ids = req.body.ids;

          if (ids) {
            _context5.next = 4;
            break;
          }

          return _context5.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The ids is required"
          }));

        case 4:
          _context5.next = 6;
          return regeneratorRuntime.awrap(ProductService.deleteManyProduct(ids));

        case 6:
          response = _context5.sent;
          return _context5.abrupt("return", res.status(200).json(response));

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(404).json({
            message: _context5.t0
          }));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var getAllProduct = function getAllProduct(req, res) {
  var _req$query, limit, page, sort, filter, response;

  return regeneratorRuntime.async(function getAllProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$query = req.query, limit = _req$query.limit, page = _req$query.page, sort = _req$query.sort, filter = _req$query.filter;
          _context6.next = 4;
          return regeneratorRuntime.awrap(ProductService.getAllProduct(Number(limit) || null, Number(page) || 0, sort, filter));

        case 4:
          response = _context6.sent;
          return _context6.abrupt("return", res.status(200).json(response));

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(404).json({
            message: _context6.t0
          }));

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getAllType = function getAllType(req, res) {
  var response;
  return regeneratorRuntime.async(function getAllType$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(ProductService.getAllType());

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", res.status(200).json(response));

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(404).json({
            message: _context7.t0
          }));

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = {
  createProduct: createProduct,
  updateProduct: updateProduct,
  getDetailsProduct: getDetailsProduct,
  deleteProduct: deleteProduct,
  getAllProduct: getAllProduct,
  deleteMany: deleteMany,
  getAllType: getAllType
};