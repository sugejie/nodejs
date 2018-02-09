var express = require('express');

var router = express.Router();

//后台模块,所有后台逻辑都要经过这里
var login = require('./admin/login.js');
var product = require('./admin/product.js');
var user = require('./admin/user.js');

//挂载路由
// /admin/login
router.use('/login', login);
// /admin/product
router.use('/product', product);
// /admin/user
router.use('/user', user);

module.exports = router; /*暴露模块*/