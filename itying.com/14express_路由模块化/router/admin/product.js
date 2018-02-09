var express = require('express');

//使用express.Router 类创建模块化、可挂载的路由句柄
var router = express.Router();

// /admin/product
router.get('/', function(req, res) {
    res.send('显示商品首页');
});

// /admin/product/add
router.get('/add', function(req, res) {
    res.send('商品增加');
});

// /admin/product/edit
router.get('/edit', function(req, res) {
    res.send('商品修改');
});

// /admin/product/delete
router.get('/delete', function(req, res) {
    res.send('商品删除');
});

module.exports = router;