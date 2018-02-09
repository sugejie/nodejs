var express = require('express');

var DB = require('../../modules/db.js');

//使用express.Router 类创建模块化、可挂载的路由句柄
var router = express.Router();

// /admin/user
router.get('/', function(req, res) {
    DB.find('user', {}, function(err, data) {
        res.render('admin/user/index', {
            list: data
        });
    });
});

// /admin/user/add
router.get('/add', function(req, res) {
    res.send('显示增加用户');
});


module.exports = router;