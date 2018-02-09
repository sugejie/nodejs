/**
 * express的使用：路由以及动态路由
 * 1.cd 到项目目录
 * 2.npm init --yes创建package.json
 * 3.安装express
 * 4.引入express使用
 */

// var express = require('express');
// var app = express();
/*替换以上两句*/
var app = require('express')();

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

// GET
app.get('/', function(req, res) {
    res.send('你好express');
});

// 动态路由传值
app.get('/newscontent/:aid', function(req, res) {
    var aid = req.params.aid
    res.send('news aid--' + aid);
});

// get传值
app.get('/product', function(req, res) {
    var query = req.query;
    res.send('product' + query.aid);
});