/**
 * ejs模板引擎
 */
var http = require('http');
var url = require('url');
//ejs模板引擎
var ejs = require('ejs');

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    var pathname =  url.parse(req.url).pathname;

    if ('/login' == pathname) {

        var data = '你好我是后台数据';
        var list = [11, 22, 33];

        //把数据库的数据渲染到模板上面
        ejs.renderFile('views/login.html', {
            msg:data,
            list:list
        }, function(err, data){
            res.end(data);
        });

    } else {
        var msg = '注释注册页面,也是注册的路由';
        var h = '<h2>这是一个h2</h2>';
        ejs.renderFile('views/register.html', {
            msg:msg,
            h:h
        }, function(err, data){
            res.end(data);
        });
    }

}).listen(3000);

console.log("Server listen on 3000");

