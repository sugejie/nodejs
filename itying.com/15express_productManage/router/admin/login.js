var express = require('express');

var bodyParser = require('body-parser'); /*获取post数据*/

var md5 = require('md5-node'); /*md5加密密码*/

var DB = require('../../modules/db.js');

var router = express.Router();


router.use(bodyParser.urlencoded({ extended:false }));
router.use(bodyParser.json());


// /admin/login
router.get('/', function(req, res) {
    res.render('admin/login');
});

// /admin/login/dologin
router.post('/dologin', function(req, res) {
    var username = req.body.username;
    var password = md5(req.body.password);
    DB.find('user', {
        username: username,
        password: password
    }, function(err, data) {
        if (data.length > 0) {
            // 保存查询到的用户信息
            req.session.userinfo = data[0];
            res.redirect('/admin/product'); //重定向=>商品列表
        } else {
            res.send("<script>alert('登陆失败');location.href='/admin/login';</script>");
        }
    });
});

// /admin/login/logout
router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/admin/login');
        }
    });
});


module.exports = router;