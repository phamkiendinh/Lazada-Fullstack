"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var getAllProduct = function getAllProduct(limit, page, sort, filter) {
  return new Promise(function _callee2(resolve, reject) {
    var totalProduct, allProduct, label, allObjectFilter, objectSort, allProductSort;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Product.count());

          case 3:
            totalProduct = _context2.sent;
            allProduct = [];

            if (!filter) {
              _context2.next = 11;
              break;
            }

            label = filter[0];
            _context2.next = 9;
            return regeneratorRuntime.awrap(Product.find(_defineProperty({}, label, {
              $regex: filter[1]
            })).limit(limit).skip(page * limit).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 9:
            allObjectFilter = _context2.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allObjectFilter,
              total: totalProduct,
              pageCurrent: Number(page + 1),
              totalPage: Math.ceil(totalProduct / limit)
            });

          case 11:
            if (!sort) {
              _context2.next = 18;
              break;
            }

            objectSort = {};
            objectSort[sort[1]] = sort[0];
            _context2.next = 16;
            return regeneratorRuntime.awrap(Product.find().limit(limit).skip(page * limit).sort(objectSort).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 16:
            allProductSort = _context2.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allProductSort,
              total: totalProduct,
              pageCurrent: Number(page + 1),
              totalPage: Math.ceil(totalProduct / limit)
            });

          case 18:
            if (limit) {
              _context2.next = 24;
              break;
            }

            _context2.next = 21;
            return regeneratorRuntime.awrap(Product.find().sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 21:
            allProduct = _context2.sent;
            _context2.next = 27;
            break;

          case 24:
            _context2.next = 26;
            return regeneratorRuntime.awrap(Product.find().limit(limit).skip(page * limit).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 26:
            allProduct = _context2.sent;

          case 27:
            resolve({
              status: "OK",
              message: "Success",
              data: allProduct,
              total: totalProduct,
              pageCurrent: Number(page + 1),
              totalPage: Math.ceil(totalProduct / limit)
            });
            _context2.next = 33;
            break;

          case 30:
            _context2.prev = 30;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 30]]);
  });
};

var getAllType = function getAllType() {
  return new Promise(function _callee3(resolve, reject) {
    var allType;
    return regeneratorRuntime.async(function _callee3$(_context3) {
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