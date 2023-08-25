const express = require('express');
const admin_router = express.Router();

const admin_controller = require('../controller/admin_controller');


admin_router.get('/', admin_controller.getOneAdmin);
admin_router.get('/category', admin_controller.getAllCategory);
admin_router.post('/category/:categoryName', admin_controller.getAllSubCategory);
admin_router.post('/category/create', admin_controller.addTopCategory);
admin_router.post('/category/:categoryName/create', admin_controller.addSubCategory);

module.exports = admin_router;