"use strict";

var Vendor = require("../../models/vendorModel.js");

var bcrypt = require("bcrypt"); // const {
//   genneralAccessToken,
//   genneralRefreshToken,
// } = require("./jwtService.js");


var JWT = require("jsonwebtoken");

var createVendor = function createVendor(newVendor) {
  return new Promise(function _callee(resolve, reject) {
    var name, email, password, phone, verified, checkVendor, hash, createdVendor;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = newVendor.name, email = newVendor.email, password = newVendor.password, phone = newVendor.phone;
            verified = "false";
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap(Vendor.findOne({
              email: email
            }));

          case 5:
            checkVendor = _context.sent;

            if (checkVendor !== null) {
              resolve({
                status: "ERR",
                message: "The email is already created"
              });
            }

            hash = bcrypt.hashSync(password, 10);
            _context.next = 10;
            return regeneratorRuntime.awrap(Vendor.create({
              name: name,
              email: email,
              password: hash,
              phone: phone,
              verified: verified
            }));

          case 10:
            createdVendor = _context.sent;

            if (createdVendor) {
              resolve({
                status: "OK",
                message: "SUCCESS",
                data: createdVendor
              });
            }

            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            reject(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 14]]);
  });
};

var loginVendor = function loginVendor(vendorLogin) {
  return new Promise(function _callee2(resolve, reject) {
    var email, password, checkVendor, comparePassword, token;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = vendorLogin.email, password = vendorLogin.password;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(Vendor.findOne({
              email: email
            }));

          case 4:
            checkVendor = _context2.sent;

            if (checkVendor === null) {
              resolve({
                status: "ERR",
                message: "The vendor is not defined"
              });
            }

            comparePassword = bcrypt.compareSync(password, checkVendor.password);

            if (!comparePassword) {
              resolve({
                status: "ERR",
                message: "The password or vendor is incorrect"
              });
            }

            _context2.next = 10;
            return regeneratorRuntime.awrap(JWT.sign({
              _id: checkVendor._id
            }, "123", {
              expiresIn: "2d"
            }));

          case 10:
            token = _context2.sent;
            console.log(checkVendor);
            resolve({
              status: "OK",
              message: "SUCCESS",
              name: checkVendor.name,
              verified: checkVendor.verified,
              _id: checkVendor._id,
              token: token
            });
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            reject(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 15]]);
  });
};

var updateVendor = function updateVendor(id, data) {
  return new Promise(function _callee3(resolve, reject) {
    var checkVendor, updatedVendor;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Vendor.findOne({
              _id: id
            }));

          case 3:
            checkVendor = _context3.sent;

            if (checkVendor === null) {
              resolve({
                status: "ERR",
                message: "The vendor is not defined"
              });
            }

            _context3.next = 7;
            return regeneratorRuntime.awrap(Vendor.findByIdAndUpdate(id, data, {
              "new": true
            }));

          case 7:
            updatedVendor = _context3.sent;
            resolve({
              status: "OK",
              message: "SUCCESS",
              data: updatedVendor
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

var deleteVendor = function deleteVendor(id) {
  return new Promise(function _callee4(resolve, reject) {
    var checkVendor;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(Vendor.findOne({
              _id: id
            }));

          case 3:
            checkVendor = _context4.sent;

            if (checkVendor === null) {
              resolve({
                status: "ERR",
                message: "The vendor is not defined"
              });
            }

            _context4.next = 7;
            return regeneratorRuntime.awrap(Vendor.findByIdAndDelete(id));

          case 7:
            resolve({
              status: "OK",
              message: "Delete vendor success"
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

var deleteManyVendor = function deleteManyVendor(ids) {
  return new Promise(function _callee5(resolve, reject) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(Vendor.deleteMany({
              _id: ids
            }));

          case 3:
            resolve({
              status: "OK",
              message: "Delete vendor success"
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

var getAllVendor = function getAllVendor() {
  return new Promise(function _callee6(resolve, reject) {
    var allVendor;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(Vendor.find().sort({
              createdAt: -1,
              updatedAt: -1
            }));

          case 3:
            allVendor = _context6.sent;
            resolve({
              status: "OK",
              message: "Success",
              data: allVendor
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

var getDetailsVendor = function getDetailsVendor(id) {
  return new Promise(function _callee7(resolve, reject) {
    var vendor;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(Vendor.findOne({
              _id: id
            }));

          case 3:
            vendor = _context7.sent;

            if (vendor === null) {
              resolve({
                status: "ERR",
                message: "The vendor is not defined"
              });
            }

            resolve({
              status: "OK",
              message: "SUCESS",
              data: vendor
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
  createVendor: createVendor,
  loginVendor: loginVendor,
  updateVendor: updateVendor,
  deleteVendor: deleteVendor,
  getAllVendor: getAllVendor,
  getDetailsVendor: getDetailsVendor,
  deleteManyVendor: deleteManyVendor
};