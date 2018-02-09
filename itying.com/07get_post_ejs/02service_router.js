/**
 * 实现路由功能
 * 路由是指根据不同的URL，执行不同的业务逻辑
 */
var http = require('http');
var url = require('url');

var router = require('./model/router.js');

http.createServer(function (req, res) {

    // router.statics(req, res, 'static');
    console.log(req.url);

    var pathname = url.parse(req.url).pathname;

    if ('/login' == pathname) {
        res.end('login');
    } else if ('/register' == pathname) {
        res.end('register');
    } else if ('order' == pathname) {
        res.end('order');
    } else {
        res.end('index');
    }

}).listen(3000);

console.log("Server listen on 3000");

