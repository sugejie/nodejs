var express = require('express');

//使用express.Router 类创建模块化、可挂载的路由句柄
var router = express.Router();

// /admin/login
router.get('/', function(req, res) {
    res.send('登陆');
});

// /admin/login/dologin
router.post('/dologin', function(req, res) {
    res.send('处理登陆业务');
});

module.exports = router;