"use strict";

var ProductService = require("../../services/vendor/productService.js");

var createProduct = function createProduct(req, res) {
  var _req$body, name, img, price, category, date, old_price, description, vendor, quantity, response;

  return regeneratorRuntime.async(function createProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, img = _req$body.img, price = _req$body.price, category = _req$body.category, date = _req$body.date, old_price = _req$body.old_price, description = _req$body.description, vendor = _req$body.vendor, quantity = _req$body.quantity;

          if (!(!name || !price || !category || !vendor || !old_price || !date || !quantity)) {
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
          console.log(data);

          if (productId) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The productId is required"
          }));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(ProductService.updateProduct(productId, data));

        case 8:
          response = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(response));

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(404).json({
            message: _context2.t0
          }));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
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
  var response;
  return regeneratorRuntime.async(function getAllProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(ProductService.getAllProduct(req.body.vendor_name));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", res.status(200).json(response));

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(404).json({
            message: _context6.t0
          }));

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
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