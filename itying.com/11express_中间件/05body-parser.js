/**
 * 第三方中间件
 * 
 * body-parser获取 post提交的数据
 */
var express = require('express');
var bodyParser = require('body-parser')

var app = new express();

app.listen(3000, 'localhost', function() {
    console.log('Server listen on 3000');
});

// 配置bodyParser中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 配置ejs
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html')

// 路由
app.get('/', function(req, res) {
    res.send('你好express');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/dologin', function(req, res) {
    console.log(req.body); /*获取post提交的数据*/
    res.send(req.body);
});

