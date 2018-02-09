/**
 * express路由以及动态路由
 */

var express = require('express');   /*引入*/

var app = express();    /*实例化,可以不加new*/

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

// GET
app.get('/', function(req, res) {
    res.send('你好express');
});

// POST
app.post('/dologin', function(req, res) {
    res.send('post');
});

// 动态路由
app.get('/newscontent/:aid', function(req, res) {

    // 获取动态路由的传值
    var aid = req.params.aid

    res.send('news aid--' + aid);
});