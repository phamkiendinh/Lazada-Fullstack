"use strict";

var User = require("../models/userModel.js");

var bcrypt = require("bcrypt");

var _require = require("./jwtService.js"),
    genneralAccessToken = _require.genneralAccessToken,
    genneralRefreshToken = _require.genneralRefreshToken;

var createUser = function createUser(newUser) {
  return new Promise(function _callee(resolve, reject) {
    var name, email, password, confirmPassword, phone, checkUser, hash, createdUser;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = newUser.name, email = newUser.email, password = newUser.password, confirmPassword = newUser.confirmPassword, phone = newUser.phone;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(User.findOne({
              email: email
            }));

          case 4:
            checkUser = _context.sent;

            if (checkUser !== null) {
              resolve({
                status: "ERR",
                message: "The email is already"
              });
            }

            hash = bcrypt.hashSync(password, 10);
            _context.next = 9;
            return regeneratorRuntime.awrap(User.create({
              name: name,
              email: email,
              password: hash,
              phone: phone
            }));

          case 9:
            createdUser = _context.sent;

            if (createdUser) {
              resolve({
                status: "OK",
                message: "SUCCESS",
                data: createdUser
              });
            }

            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            reject(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 13]]);
  });
};

var loginUser = function loginUser(userLogin) {
  return new Promise(function _callee2(resolve, reject) {
    var email, password, checkUser, comparePassword, access_token, refresh_token;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = userLogin.email, password = userLogin.password;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(User.findOne({
              email: email
            }));

          case 4:
            checkUser = _context2.sent;

            if (checkUser === null) {
              resolve({
                status: "ERR",
                message: "The user is not defined"
              });
            }

            comparePassword = bcrypt.compareSync(password, checkUser.password);

            if (!comparePassword) {
              resolve({
                status: "ERR",
                message: "The password or user is incorrect"
              });
            }

            _context2.next = 10;
            return regeneratorRuntime.awrap(genneralAccessToken({
              id: checkUser.id,
              isAdmin: checkUser.isAdmin
            }));

          case 10:
            access_token = _context2.sent;
            _context2.next = 13;
            return regeneratorRuntime.awrap(genneralRefreshToken({
              id: checkUser.id,
              isAdmin: checkUser.isAdmin
            }));

          case 13:
            refresh_token = _context2.sent;
            resolve({
              status: "OK",
              message: "SUCCESS",
              access_token: access_token,
              refresh_token: refresh_token
            });
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](1);
            reject(_context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 17]]);
  });
};

var updateUser = function updateUser(id, data) {
  return new Promise(function _callee3(resolve, reject) {
    var checkUser, updatedUser;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              _id: id
            }));

          case 3:
            checkUser = _context3.sent;

            if (checkUser === null) {
              resolve({
                status: "ERR",
                message: "The user is not defined"
              });
            }

            _context3.next = 7;
            return regeneratorRuntime.awrap(User.findByIdAndUpdate(id, data, {
              "new": true
            }));

          case 7:
            updatedUser = _context3.sent;
            resolve({
              status: "OK",
              message: "SUCCESS",
              data: updatedUser
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  });
};

var deleteUser = function deleteUser(id) {
  return new Promise(function _callee4(resolve, reject) {
    var checkUser;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              _id: id
            }));

          case 3:
            checkUser = _context4.sent;

            if (checkUser === null) {
              resolve({
                status: "ERR",
                message: "The user is not defined"
              });
            }

            _context4.next = 7;
            return regeneratorRuntime.awrap(User.findByIdAndDelete(id));

          case 7:
            resolve({
              status: "OK",
              message: "Delete user success"
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
};

var deleteManyUser = function deleteManyUser(ids) {
  return new Promise(function _callee5(resolve, reject) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(User.deleteMany({
              _id: ids
            }));

          case 3:
            resolve({
              status: "OK",
              message: "Delete user success"
            });
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 6]]);
  });
};

var getAllUser = function getAllUser() {
  return new Promise(function _callee6(resolve, reject) {
    var allUser;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(User.find().sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 3:
            allUser = _context6.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allUser
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

var getDetailsUser = function getDetailsUser(id) {
  return new Promise(function _callee7(resolve, reject) {
    var user;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              _id: id
            }));

          case 3:
            user = _context7.sent;

            if (user === null) {
              resolve({
                status: "ERR",
                message: "The user is not defined"
              });
            }

            resolve({
              status: "OK",
              message: "SUCESS",
              data: user
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
};

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getAllUser: getAllUser,
  getDetailsUser: getDetailsUser,
  deleteManyUser: deleteManyUser
};