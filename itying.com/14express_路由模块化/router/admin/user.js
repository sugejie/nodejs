var express = require('express');

//使用express.Router 类创建模块化、可挂载的路由句柄
var router = express.Router();

// /admin/user
router.get('/', function(req, res) {
    res.send('显示用户首页');
});

// /admin/user/add
router.get('/add', function(req, res) {
    res.send('显示增加用户');
});


module.exports = router;