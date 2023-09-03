"use strict";

var Order = require("../../models/orderModel.js");

var Product = require("../../models/productModel.js");

var createOrder = function createOrder(newOrder) {
  return new Promise(function _callee(resolve, reject) {
    var customerName, items, shippingFee, total, status, createdOrder;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            customerName = newOrder.customerName, items = newOrder.items, shippingFee = newOrder.shippingFee, total = newOrder.total;
            status = "New";
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap(Order.create({
              customerName: customerName,
              items: items,
              shippingFee: shippingFee,
              total: total,
              status: status
            }));

          case 5:
            createdOrder = _context.sent;

            if (createdOrder) {
              resolve({
                status: "OK",
                message: "SUCCESS",
                data: createdOrder
              });
            }

            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            //   console.log('e', e)
            reject(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 9]]);
  });
}; // const deleteManyProduct = (ids) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await Product.deleteMany({ _id: ids })
//             resolve({
//                 status: 'OK',
//                 message: 'Delete product success',
//             })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }


var getAllOrderDetails = function getAllOrderDetails(id) {
  return new Promise(function _callee2(resolve, reject) {
    var order;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Order.find({
              user: id
            }).sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 3:
            order = _context2.sent;

            if (order === null) {
              resolve({
                status: "ERR",
                message: "The order is not defined"
              });
            }

            resolve({
              status: "OK",
              message: "SUCESSS",
              data: order
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            // console.log('e', e)
            reject(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

var getOrderDetails = function getOrderDetails(id) {
  return new Promise(function _callee3(resolve, reject) {
    var order;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Order.findById({
              _id: id
            }));

          case 3:
            order = _context3.sent;

            if (order === null) {
              resolve({
                status: "ERR",
                message: "The order is not defined"
              });
            }

            resolve({
              status: "OK",
              message: "SUCESSS",
              data: order
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            // console.log('e', e)
            reject(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

var cancelOrderDetails = function cancelOrderDetails(id, data) {
  return new Promise(function _callee5(resolve, reject) {
    var order, promises, results, newData;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            order = [];
            promises = data.map(function _callee4(order) {
              var productData;
              return regeneratorRuntime.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(Product.findOneAndUpdate({
                        _id: order.product,
                        selled: {
                          $gte: order.amount
                        }
                      }, {
                        $inc: {
                          countInStock: +order.amount,
                          selled: -order.amount
                        }
                      }, {
                        "new": true
                      }));

                    case 2:
                      productData = _context4.sent;

                      if (!productData) {
                        _context4.next = 10;
                        break;
                      }

                      _context4.next = 6;
                      return regeneratorRuntime.awrap(Order.findByIdAndDelete(id));

                    case 6:
                      order = _context4.sent;

                      if (order === null) {
                        resolve({
                          status: "ERR",
                          message: "The order is not defined"
                        });
                      }

                      _context4.next = 11;
                      break;

                    case 10:
                      return _context4.abrupt("return", {
                        status: "OK",
                        message: "ERR",
                        id: order.product
                      });

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            });
            _context5.next = 5;
            return regeneratorRuntime.awrap(Promise.all(promises));

          case 5:
            results = _context5.sent;
            newData = results && results[0] && results[0].id;

            if (newData) {
              resolve({
                status: "ERR",
                message: "San pham voi id: ".concat(newData, " khong ton tai")
              });
            }

            resolve({
              status: "OK",
              message: "success",
              data: order
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  });
};

var getAllOrder = function getAllOrder() {
  return new Promise(function _callee6(resolve, reject) {
    var allOrder;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(Order.find().sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 3:
            allOrder = _context6.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allOrder
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
};

module.exports = {
  createOrder: createOrder,
  getAllOrderDetails: getAllOrderDetails,
  getOrderDetails: getOrderDetails,
  cancelOrderDetails: cancelOrderDetails,
  getAllOrder: getAllOrder
};