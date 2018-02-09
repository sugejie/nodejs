/**
 * cookie signed设置加密
 *     1.设置加密字符串
 *     2.配置cookie参数
 *     3.获取加密数据req.signedCookies.userinfo
 *         - req.signedCookies后面必须跟上key，否则会报错
 */
var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('123456')); //123456表示加密字符串

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

app.get('/', function(req, res) {
    res.send('Hello Nodejs');
});

app.get('/set', function(req, res) {
    //参数1：key; 参数2：vaalue; 参数3：cookie的配置信息
    res.cookie('userinfo', 'cookie222_info', {
        maxAge: 60*1000,
        signed: true //默认明文保存
    });
    res.send('设置cookie成功');
});

app.get('/get', function(req, res) {
    console.log('获取cookie加密数据:' + req.signedCookies.userinfo);
    res.send('获取cookie加密数据');
});
