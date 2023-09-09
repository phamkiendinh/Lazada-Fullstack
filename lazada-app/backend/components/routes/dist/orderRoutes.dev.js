"use strict";

var express = require("express");

var router = express.Router();

var OrderController = require("../controllers/customer/orderController.js");

var _require = require("../middlewares/customer/authMiddleware.js"),
    authUserMiddleWare = _require.authUserMiddleWare,
    authMiddleWare = _require.authMiddleWare;

router.post("/create/:id", authUserMiddleWare, OrderController.createOrder);
router.get("/get-all-order/:id", authUserMiddleWare, OrderController.getAllOrderDetails);
router.get("/get-details-order/:id", OrderController.getDetailsOrder);
router["delete"]("/cancel-order/:id", authUserMiddleWare, OrderController.cancelOrderDetails);
router.get("/get-all-order", authMiddleWare, OrderController.getAllOrder);
module.exports = router;