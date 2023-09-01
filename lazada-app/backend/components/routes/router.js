const UserRouter = require("./customer/userRoutes.js");
const ProductRouter = require("./customer/productRoutes.js");
const OrderRouter = require("./customer/orderRoutes.js");

const VendorRouter = require("./vendor/vendorRoutes.js");
const VendorProductRouter = require("./vendor/productRoutes.js");

const routes = (app) => {
  // User/Customer routes
  app.use("/api/customer/user", UserRouter);
  app.use("/api/customer/product", ProductRouter);
  app.use("/api/customer/order", OrderRouter);

  // Vendor routes
  app.use("/api/vendor/user", VendorRouter);
  app.use("/api/vendor/product", VendorProductRouter);
};

module.exports = routes;
