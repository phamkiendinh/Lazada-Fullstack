"use strict";

var OrderService = require("../../services/customer/orderService.js");

var createOrder = function createOrder(req, res) {
  var _req$body, items, subTotal, shippingFee, total, customer, response;

  return regeneratorRuntime.async(function createOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, items = _req$body.items, subTotal = _req$body.subTotal, shippingFee = _req$body.shippingFee, total = _req$body.total, customer = _req$body.customer;

          if (!(!items || !subTotal || !shippingFee || !total || !customer)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: "ERR",
            message: "Invalid input data"
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(OrderService.createOrder(req.body));

        case 6:
          response = _context.sent;
          return _context.abrupt("return", res.status(201).json(response));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0.message
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var getDetailsOrder = function getDetailsOrder(req, res) {
  var orderId, response;
  return regeneratorRuntime.async(function getDetailsOrder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          orderId = req.params.id;

          if (orderId) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The userId is required"
          }));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(OrderService.getOrderDetails(orderId));

        case 6:
          response = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(response));

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(404).json({
            message: _context2.t0
          }));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var cancelOrderDetails = function cancelOrderDetails(req, res) {
  var data, orderId, response;
  return regeneratorRuntime.async(function cancelOrderDetails$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = req.body.orderItems;
          orderId = req.body.orderId;

          if (orderId) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The orderId is required"
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(OrderService.cancelOrderDetails(orderId, data));

        case 7:
          response = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(response));

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(404).json({
            message: _context3.t0
          }));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var getAllOrder = function getAllOrder(req, res) {
  var data;
  return regeneratorRuntime.async(function getAllOrder$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(OrderService.getAllOrder());

        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(data));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(404).json({
            message: _context4.t0
          }));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = {
  createOrder: createOrder,
  getDetailsOrder: getDetailsOrder,
  cancelOrderDetails: cancelOrderDetails,
  getAllOrder: getAllOrder
};