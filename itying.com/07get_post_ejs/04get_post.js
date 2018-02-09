/**
 * ejs模板引擎
 */
var http = require('http');
var url = require('url');
//ejs模板引擎
var ejs = require('ejs');

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    //请求类型：get/post
    var method = req.method.toLowerCase();

    var pathname =  url.parse(req.url).pathname;

    if ('/login' == pathname) { /*显示登陆页面*/
        ejs.renderFile('views/form.html', {
        }, function(err, data) {
            res.end(data);
        });

    } else if ('/dologin' == pathname && 'get' == method) { /*执行登陆操作*/
        res.end(url.parse(req.url, true).query);

    } else if ('/dologin' == pathname && 'post' == method) { /*执行登陆操作*/
        var postStr = '';
        req.on('data', function(chunk) {
            postStr += chunk;
        });
        req.on('end', function(err) {
            console.log(postStr);
            res.end("<script>alert('登陆成功');history.back();</script>");
        });

    } else {
        ejs.renderFile('views/index.html', {
        }, function(err, data) {
            res.end(data);
        });
    }

}).listen(3000);

console.log("Server listen on 3000");

