"use strict";

var UserRouter = require("./customer/userRoutes.js");

var ProductRouter = require("./customer/productRoutes.js");

var OrderRouter = require("./customer/orderRoutes.js");

var VendorRouter = require("./vendor/vendorRoutes.js");

var VendorProductRouter = require("./vendor/productRoutes.js");

var routes = function routes(app) {
  // User/Customer routes
  app.use("/api/customer/user", UserRouter);
  app.use("/api/customer/product", ProductRouter);
  app.use("/api/customer/order", OrderRouter); // Vendor routes

  app.use("/api/vendor/user", VendorRouter);
  app.use("/api/vendor/product", VendorProductRouter);
};

module.exports = routes;