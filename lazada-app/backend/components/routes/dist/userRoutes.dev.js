"use strict";

var express = require("express");

var router = express.Router();

var userController = require("../controllers/userController.js");

var _require = require("../middlewares/customer/authMiddleware.js"),
    authMiddleWare = _require.authMiddleWare,
    authUserMiddleWare = _require.authUserMiddleWare;

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.post("/log-out", userController.logoutUser);
router.put("/update-user/:id", authUserMiddleWare, userController.updateUser);
router["delete"]("/delete-user/:id", authMiddleWare, userController.deleteUser);
router.get("/getAll", authMiddleWare, userController.getAllUser);
router.get("/get-details/:id", authUserMiddleWare, userController.getDetailsUser);
router.post("/refresh-token", userController.refreshToken);
router.post("/delete-many", authMiddleWare, userController.deleteMany);
module.exports = router;