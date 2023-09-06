"use strict";

var express = require("express");

var router = express.Router();

var ProductController = require("../../controllers/customer/productController.js");

router.get("/get-details/:id", ProductController.getDetailsProduct);
router.get("/get-all", ProductController.getAllProduct);
router.get("/get-all-type", ProductController.getAllType);
module.exports = router;