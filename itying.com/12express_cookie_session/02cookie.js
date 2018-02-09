/**
 * cookie参数设置
 *     domain:域名
 *     maxage:过期时间(ms)
 *     expires:过期时间(具体的时间)
 *     secure:是否https才有效(true/false)
 *     path:有效路径
 *     httpOnly:是否只有服务器端才能设置
 *     singed:是否设置加密
 */
var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

app.get('/', function(req, res) {
    res.send('Hello Nodejs');
});

app.get('/set', function(req, res) {
    //参数1：key; 参数2：vaalue; 参数3：cookie的配置信息
    res.cookie('userinfo', 'cookie的值', {
        maxAge: 60*1000, 
        domain: 'localhost',
        path: '/'
    });
    res.send('设置cookie成功');
});

app.get('/get', function(req, res) {
    console.log(req.cookies);
    res.send('Hello Nodejs get');
});
