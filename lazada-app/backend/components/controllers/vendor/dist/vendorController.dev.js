"use strict";

var VendorService = require("../../services/vendor/vendorService.js"); // const JwtService = require("../../services/vendor/jwtService.js");


var createVendor = function createVendor(req, res) {
  var _req$body, name, email, password, confirmPassword, phone, reg, isCheckEmail, _response;

  return regeneratorRuntime.async(function createVendor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, confirmPassword = _req$body.confirmPassword, phone = _req$body.phone;
          reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          isCheckEmail = reg.test(email);

          if (!(!email || !password || !confirmPassword)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The input is required"
          }));

        case 8:
          if (isCheckEmail) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The input is email"
          }));

        case 12:
          if (!(password !== confirmPassword)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The password is equal confirmPassword"
          }));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(VendorService.createVendor(req.body));

        case 16:
          _response = _context.sent;
          return _context.abrupt("return", res.status(200).json(_response));

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(404).json({
            message: _context.t0
          }));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

var loginVendor = function loginVendor(req, res) {
  var _req$body2, email, password, reg, isCheckEmail, _response2;

  return regeneratorRuntime.async(function loginVendor$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          isCheckEmail = reg.test(email);

          if (!(!email || !password)) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The input is required"
          }));

        case 8:
          if (isCheckEmail) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The input is email"
          }));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(VendorService.loginVendor(req.body));

        case 12:
          _response2 = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(_response2));

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(404).json({
            message: _context2.t0
          }));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

var updateVendor = function updateVendor(req, res) {
  var vendorId, data, _response3;

  return regeneratorRuntime.async(function updateVendor$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          vendorId = req.params.id;
          data = req.body;

          if (vendorId) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The vendorId is required"
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(VendorService.updateVendor(vendorId, data));

        case 7:
          _response3 = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(_response3));

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

var deleteVendor = function deleteVendor(req, res) {
  var vendorId, _response4;

  return regeneratorRuntime.async(function deleteVendor$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          vendorId = req.params.id;

          if (vendorId) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The vendorId is required"
          }));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(VendorService.deleteVendor(vendorId));

        case 6:
          _response4 = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(_response4));

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
  var ids, _response5;

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
          return regeneratorRuntime.awrap(VendorService.deleteManyVendor(ids));

        case 6:
          _response5 = _context5.sent;
          return _context5.abrupt("return", res.status(200).json(_response5));

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

var getAllVendor = function getAllVendor(req, res) {
  var _response6;

  return regeneratorRuntime.async(function getAllVendor$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(VendorService.getAllVendor());

        case 3:
          _response6 = _context6.sent;
          return _context6.abrupt("return", res.status(200).json(_response6));

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

var getDetailsVendor = function getDetailsVendor(req, res) {
  var vendorId, _response7;

  return regeneratorRuntime.async(function getDetailsVendor$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          vendorId = req.params.id;

          if (vendorId) {
            _context7.next = 4;
            break;
          }

          return _context7.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The vendorId is required"
          }));

        case 4:
          _context7.next = 6;
          return regeneratorRuntime.awrap(VendorService.getDetailsVendor(vendorId));

        case 6:
          _response7 = _context7.sent;
          return _context7.abrupt("return", res.status(200).json(_response7));

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(404).json({
            message: _context7.t0
          }));

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var refreshToken = function refreshToken(req, res) {
  var token;
  return regeneratorRuntime.async(function refreshToken$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          token = req.headers.token.split(" ")[1];

          if (token) {
            _context8.next = 4;
            break;
          }

          return _context8.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The token is required"
          }));

        case 4:
          return _context8.abrupt("return", res.status(200).json(response));

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(404).json({
            message: _context8.t0
          }));

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var logoutVendor = function logoutVendor(req, res) {
  return regeneratorRuntime.async(function logoutVendor$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          return _context9.abrupt("return", res.status(200).json({
            status: "OK",
            message: "Logout successfully"
          }));

        case 4:
          _context9.prev = 4;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(404).json({
            message: _context9.t0
          }));

        case 7:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 4]]);
};

module.exports = {
  createVendor: createVendor,
  loginVendor: loginVendor,
  updateVendor: updateVendor,
  deleteVendor: deleteVendor,
  getAllVendor: getAllVendor,
  getDetailsVendor: getDetailsVendor,
  refreshToken: refreshToken,
  logoutVendor: logoutVendor,
  deleteMany: deleteMany
};