"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var UserService = require("../services/userService.js");

var JwtService = require("../services/jwtService.js");

var createUser = function createUser(req, res) {
  var _req$body, name, email, password, confirmPassword, phone, reg, isCheckEmail, response;

  return regeneratorRuntime.async(function createUser$(_context) {
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
          return regeneratorRuntime.awrap(UserService.createUser(req.body));

        case 16:
          response = _context.sent;
          return _context.abrupt("return", res.status(200).json(response));

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

var loginUser = function loginUser(req, res) {
  var _req$body2, email, password, reg, isCheckEmail, response, refresh_token, newReponse;

  return regeneratorRuntime.async(function loginUser$(_context2) {
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
          return regeneratorRuntime.awrap(UserService.loginUser(req.body));

        case 12:
          response = _context2.sent;
          refresh_token = response.refresh_token, newReponse = _objectWithoutProperties(response, ["refresh_token"]);
          res.cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            path: "/"
          });
          return _context2.abrupt("return", res.status(200).json(_objectSpread({}, newReponse, {
            refresh_token: refresh_token
          })));

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(404).json({
            message: _context2.t0
          }));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

var updateUser = function updateUser(req, res) {
  var userId, data, response;
  return regeneratorRuntime.async(function updateUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userId = req.params.id;
          data = req.body;

          if (userId) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The userId is required"
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(UserService.updateUser(userId, data));

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

var deleteUser = function deleteUser(req, res) {
  var userId, response;
  return regeneratorRuntime.async(function deleteUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          userId = req.params.id;

          if (userId) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The userId is required"
          }));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(UserService.deleteUser(userId));

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
          return regeneratorRuntime.awrap(UserService.deleteManyUser(ids));

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

var getAllUser = function getAllUser(req, res) {
  var response;
  return regeneratorRuntime.async(function getAllUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(UserService.getAllUser());

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

var getDetailsUser = function getDetailsUser(req, res) {
  var userId, response;
  return regeneratorRuntime.async(function getDetailsUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          userId = req.params.id;

          if (userId) {
            _context7.next = 4;
            break;
          }

          return _context7.abrupt("return", res.status(200).json({
            status: "ERR",
            message: "The userId is required"
          }));

        case 4:
          _context7.next = 6;
          return regeneratorRuntime.awrap(UserService.getDetailsUser(userId));

        case 6:
          response = _context7.sent;
          return _context7.abrupt("return", res.status(200).json(response));

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
  var token, response;
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
          _context8.next = 6;
          return regeneratorRuntime.awrap(JwtService.refreshTokenJwtService(token));

        case 6:
          response = _context8.sent;
          return _context8.abrupt("return", res.status(200).json(response));

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(404).json({
            message: _context8.t0
          }));

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var logoutUser = function logoutUser(req, res) {
  return regeneratorRuntime.async(function logoutUser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          res.clearCookie("refresh_token");
          return _context9.abrupt("return", res.status(200).json({
            status: "OK",
            message: "Logout successfully"
          }));

        case 5:
          _context9.prev = 5;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(404).json({
            message: _context9.t0
          }));

        case 8:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getAllUser: getAllUser,
  getDetailsUser: getDetailsUser,
  refreshToken: refreshToken,
  logoutUser: logoutUser,
  deleteMany: deleteMany
};