"use strict";

var express = require("express");

var router = express.Router();

var ProductController = require("../controllers/productController.js");

var _require = require("../middlewares/customer/authMiddleware.js"),
    authMiddleWare = _require.authMiddleWare;

router.post("/create", ProductController.createProduct);
router.put("/update/:id", authMiddleWare, ProductController.updateProduct);
router.get("/get-details/:id", ProductController.getDetailsProduct);
router["delete"]("/delete/:id", authMiddleWare, ProductController.deleteProduct);
router.get("/get-all", ProductController.getAllProduct);
router.post("/delete-many", authMiddleWare, ProductController.deleteMany);
router.get("/get-all-type", ProductController.getAllType);
module.exports = router;