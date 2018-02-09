/**
 * 内置中间件
 */
var express = require('express');
var app = new express();


app.listen(3000, 'localhost', function() {
    console.log('Server listen on 3000');
});


//内置中间件 脱管静态页面
//匹配路由之前先在public下看是否存在
//匹配不到才继续向下匹配
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.send('你好express');
});


