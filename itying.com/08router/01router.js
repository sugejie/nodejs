/**
 * 封装路由操作
 */
var http = require('http');
var url = require('url');

var model = require('./model/model');

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    var pathname = url.parse(req.url).pathname.replace('/', '');
    // console.log(pathname);
    
    if ('favicon.ico' != pathname) {
        try{
            model[pathname](req, res);
        } catch(err) {
            model['home'](req, res);
        }
    }

}).listen(3000);

console.log("Server listen on 3000");

