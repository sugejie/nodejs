/**
 * web服务器 静态文件托管
 * 通过把web服务封装到router模块中实现
 */
var http = require('http');
var router = require('./model/router.js');

http.createServer(function (req, res) {

    router.statics(req, res, 'static');

}).listen(3000);

console.log("Server listen on 3000");
