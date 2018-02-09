/**
 * cookie基本使用
 *     res设置cookie
 *     req获取cookie
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
    res.cookie('userinfo', 'cookie的值', {maxAge:60*1000});
    res.send('设置cookie成功');
});

app.get('/get', function(req, res) {
    console.log(req.cookies);
    res.send('Hello Nodejs get');
});
