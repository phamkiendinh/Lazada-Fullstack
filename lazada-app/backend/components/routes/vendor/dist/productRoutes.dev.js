"use strict";

var express = require("express");

var router = express.Router();

var ProductController = require("../../controllers/vendor/productController.js"); // const { authMiddleWare } = require("../middlewares/vendor/authMiddleware.js");


router.post("/create", ProductController.createProduct);
router.put("/update/:id", // authMiddleWare,
ProductController.updateProduct);
router.get("/get-details/:id", ProductController.getDetailsProduct);
router["delete"]("/delete/:id", // authMiddleWare,
ProductController.deleteProduct);
router.post("/get-all", ProductController.getAllProduct); // router.post(
//   "/delete-many",
//   // authMiddleWare,
//   ProductController.deleteMany
// );
// router.get("/get-all-type", ProductController.getAllType);

module.exports = router;