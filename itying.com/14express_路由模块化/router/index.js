var express = require('express');

//使用express.Router 类创建模块化、可挂载的路由句柄
var router = express.Router();

// /index
router.get('/', function(req, res) {
    res.send('index');
});

// /index/product
router.get('/product', function(req, res) {
    res.send('product页面');
});

module.exports = router;