
var express = require('express');

var session = require('express-session'); /*session模块*/

var admin = require('./router/admin.js');

var index = require('./router/index.js');

var app = express(); /*实例化*/


/*********************配置部分*********************/
// 配置模板引擎 - ejs
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// 配置静态web服务
app.use(express.static('public'));

app.use('/upload', express.static('upload'));
/*********************配置结束*********************/


/*********************配置中间件*******************/
// session
app.use(session({
    secret: '123456', /*加密字符串*/
    resave: false, /*强制保存session,默认true*/
    saveUninitialized: true, /*强制将未初始化的session存储,默认true*/
    cookie: {
        maxAge: 5 * 60 * 1000 
    },
    rolling: true /*一段时间无操作才过期*/
}));
/*******************配置中间件结束*****************/


/*********************挂载路由*********************/
app.use('/', index);

app.use('/admin', admin);
/*******************挂载路由结束*******************/

//启动服务
app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});