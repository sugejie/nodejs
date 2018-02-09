var express = require('express');

var router = express.Router();

//后台模块,所有后台逻辑都要经过这里
var login = require('./admin/login.js');
var product = require('./admin/product.js');
var user = require('./admin/user.js');


/*********************配置中间件********************/
// 判断权限 - 是否登陆
router.use(function(req, res, next) {
    if (req.url=='/login' || req.url=='/login/dologin') {
        next();
    } else {
        if (req.session.userinfo && req.session.userinfo.username) {
            /* 
             * 设置全局数据（router没有locals）
             * app.locals：全局
             * req.app.locals：请求的全局
             */
            req.app.locals['userinfo'] = req.session.userinfo;
            next();
        } else {
            res.redirect('/admin/login');
        }
    }
});
/*******************配置中间件结束*******************/


/*********************挂载路由*********************/
// /admin/login
router.use('/login', login);
// /admin/product
router.use('/product', product);
// /admin/user
router.use('/user', user);
/*******************挂载路由结束*******************/


module.exports = router; /*暴露模块*/