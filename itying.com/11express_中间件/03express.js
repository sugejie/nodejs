/**
 * 错误处理中间件
 */
var express = require('express');
var app = new express();


app.listen(3000, 'localhost', function() {
    console.log('Server listen on 3000');
});


app.get('/', function(req, res) {
    res.send('你好express');
});

app.get('/news', function(req, res) {
    res.send('你好express news');
});

/**
 * 匹配所有路由 404
 * 以上路由都匹配不到时执行此路由
 */
app.use(function(req, res) {
    res.status(404).send('这是404 表示路有没有匹配到');
});