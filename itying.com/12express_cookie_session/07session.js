/**
 * session存入mongodb
 *
 * 这里使用connect-mongo模块向数据库中存储session
 * 
 * 负载均衡中需要将session存入数据库，
 * 不同服务器根据session_id查session
 */
var express = require('express');

var session = require('express-session')

var MongoStore = require('connect-mongo')(session);

var app = express();

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

//配置中间件
app.use(session({
    secret: '123456', /*加密字符串*/
    name: 'session_id', /*非必须,保存session的cookie名称,默认connect_sid*/
    resave: false, /*强制保存session,默认true*/
    saveUninitialized: true, /*强制将未初始化的session存储,默认true*/
    cookie: {
        maxAge: 5 * 60 * 1000 
    },
    rolling: true, /*一段时间无操作才过期*/
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/itying', //数据库地址
        touchAfter: 24 * 3600 //24小时更新一次会话
    })
}));


app.get('/', function(req, res) {
    if (req.session.userinfo) {
        res.send('你好,' + req.session.userinfo + ',欢迎回来!');
    } else {
        res.send('未登陆');
    }
});

app.get('/login', function(req, res) {
    req.session.userinfo = '张三111'; /*设置session*/
    res.send('登陆成功');
});

app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.send('退出成功');
});

