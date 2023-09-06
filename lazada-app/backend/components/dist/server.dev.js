"use strict";

var express = require("express");

var dotenv = require("dotenv");

var routes = require("./routes/router.js");

var cors = require("cors");

var bodyParser = require("body-parser"); // const cookieParser = require("cookie-parser");


dotenv.config();

var connectDB = require("./components/configs/db.js");

connectDB();
var port = process.env.PORT || 5000;
var app = express();
app.use(cors());
app.use(express.json({
  limit: "50mb"
}));
app.use(express.urlencoded({
  limit: "50mb"
}));
app.use(bodyParser.json()); // app.use(cookieParser());

routes(app);
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});