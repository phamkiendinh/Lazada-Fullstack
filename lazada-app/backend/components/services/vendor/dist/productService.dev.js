"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Product = require("../../models/productModel.js");

var createProduct = function createProduct(newProduct) {
  return new Promise(function _callee(resolve, reject) {
    var name, img, price, old_price, description, category, vendor, date, checkProduct, createdProduct;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = newProduct.name, img = newProduct.img, price = newProduct.price, old_price = newProduct.old_price, description = newProduct.description, category = newProduct.category, vendor = newProduct.vendor, date = newProduct.date;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(Product.findOne({
              name: name
            }));

          case 4:
            checkProduct = _context.sent;

            if (!(checkProduct !== null)) {
              _context.next = 8;
              break;
            }

            resolve({
              status: "ERR",
              message: "The product name already exists"
            });
            return _context.abrupt("return");

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap(Product.create({
              name: name,
              img: img,
              price: price,
              old_price: old_price,
              description: description,
              category: category,
              vendor: vendor,
              date: date
            }));

          case 10:
            createdProduct = _context.sent;

            if (createdProduct) {
              resolve({
                status: "OK",
                message: "SUCCESS",
                data: createdProduct
              });
            }

            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            reject(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 14]]);
  });
};

var updateProduct = function updateProduct(id, data) {
  console.log(data);
  return new Promise(function _callee2(resolve, reject) {
    var checkProduct, updatedProduct;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Product.findOne({
              _id: id
            }));

          case 3:
            checkProduct = _context2.sent;

            if (checkProduct === null) {
              resolve({
                status: "ERR",
                message: "The product is not defined"
              });
            }

            _context2.next = 7;
            return regeneratorRuntime.awrap(Product.findByIdAndUpdate(id, data, {
              "new": true
            }));

          case 7:
            updatedProduct = _context2.sent;
            resolve({
              status: "OK",
              message: "SUCCESS",
              data: updatedProduct
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  });
};

var deleteProduct = function deleteProduct(id) {
  return new Promise(function _callee3(resolve, reject) {
    var checkProduct;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Product.findOne({
              _id: id
            }));

          case 3:
            checkProduct = _context3.sent;

            if (checkProduct === null) {
              resolve({
                status: "ERR",
                message: "The product is not defined"
              });
            }

            _context3.next = 7;
            return regeneratorRuntime.awrap(Product.findByIdAndDelete(id));

          case 7:
            resolve({
              status: "OK",
              message: "Delete product success"
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
};

var deleteManyProduct = function deleteManyProduct(ids) {
  return new Promise(function _callee4(resolve, reject) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(Product.deleteMany({
              _id: ids
            }));

          case 3:
            resolve({
              status: "OK",
              message: "Delete product success"
            });
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 6]]);
  });
};

var getDetailsProduct = function getDetailsProduct(id) {
  return new Promise(function _callee5(resolve, reject) {
    var product;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(Product.findOne({
              _id: id
            }));

          case 3:
            product = _context5.sent;

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
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

var getAllProduct = function getAllProduct(limit, page, sort, filter) {
  return new Promise(function _callee6(resolve, reject) {
    var totalProduct, allProduct, label, allObjectFilter, objectSort, allProductSort;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(Product.count());

          case 3:
            totalProduct = _context6.sent;
            allProduct = [];

            if (!filter) {
              _context6.next = 11;
              break;
            }

            label = filter[0];
            _context6.next = 9;
            return regeneratorRuntime.awrap(Product.find(_defineProperty({}, label, {
              $regex: filter[1]
            })).limit(limit).skip(page * limit).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 9:
            allObjectFilter = _context6.sent;
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
              _context6.next = 18;
              break;
            }

            objectSort = {};
            objectSort[sort[1]] = sort[0];
            _context6.next = 16;
            return regeneratorRuntime.awrap(Product.find().limit(limit).skip(page * limit).sort(objectSort).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 16:
            allProductSort = _context6.sent;
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
              _context6.next = 24;
              break;
            }

            _context6.next = 21;
            return regeneratorRuntime.awrap(Product.find().sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 21:
            allProduct = _context6.sent;
            _context6.next = 27;
            break;

          case 24:
            _context6.next = 26;
            return regeneratorRuntime.awrap(Product.find().limit(limit).skip(page * limit).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 26:
            allProduct = _context6.sent;

          case 27:
            resolve({
              status: "OK",
              message: "Success",
              data: allProduct,
              total: totalProduct,
              pageCurrent: Number(page + 1),
              totalPage: Math.ceil(totalProduct / limit)
            });
            _context6.next = 33;
            break;

          case 30:
            _context6.prev = 30;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);

          case 33:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 30]]);
  });
};

var getAllType = function getAllType() {
  return new Promise(function _callee7(resolve, reject) {
    var allType;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(Product.distinct("type"));

          case 3:
            allType = _context7.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allType
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

module.exports = {
  createProduct: createProduct,
  updateProduct: updateProduct,
  getDetailsProduct: getDetailsProduct,
  deleteProduct: deleteProduct,
  getAllProduct: getAllProduct,
  deleteManyProduct: deleteManyProduct,
  getAllType: getAllType
};