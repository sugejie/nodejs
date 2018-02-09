/**
 * 路由中间件
 */
var express = require('express');
var app = new express();


app.listen(3000, 'localhost', function() {
    console.log('Server listen on 3000');
});


/**
 * 应用级别中间件
 * 匹配任何路由
 * next() 路由继续向下匹配
 */
app.use(function(req, res, next) {
    console.log(new Date());
    next();
});

app.use('/news', function(req, res, next) {
    console.log('新闻路由中间件');
    next();
});


app.get('/', function(req, res) {
    res.send('你好express');
});

//路由中间件
//调用next();执行下一个/news路由
//res.send()只能在最后执行一次
app.get('/news', function(req, res, next) {
    console.log('这是路由中间件');
    next();
});

app.get('/news', function(req, res) {
    res.send('这是路由news');
});



