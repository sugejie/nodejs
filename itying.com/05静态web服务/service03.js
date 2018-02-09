var http = require('http');
//fs模块，用于读取静态文件
var fs = require('fs');
//path模块，用于获取后缀
//path.extname('index.html') //.html
var path = require('path');
//url模块，解析url获取pathname,可以去除时间戳等数字
var url = require('url');
// 获取自定义模块，用于获取http中类型：text/html
var mimeModel = require('./model/getmime.js');

http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    if ('/' == pathname) {  /*默认加载首页*/
        pathname = '/index.html';
    }

    if ('/favicon.ico' != pathname) {   /*过滤请求favicon.ico*/
        //获取文件后缀名
        var extname = path.extname(pathname);

        //文件操作获取static下面的index.html
        fs.readFile('static/'+pathname, function(err, data) {
            if (err) {  /*没有这个文件*/
                // console.log('404');
                fs.readFile('static/404.html', function(err, data404) {
                    if (err) {
                        console.log('404');
                    }
                    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end();
                });
            } else {    /*返回这个文件*/
                var mime = mimeModel.getMime(extname);  /*获取文件类型*/
                res.writeHead(200, {"Content-Type":mime+";charset='utf-8'"});
                res.write(data);
                res.end();
            }
        });
    }

}).listen(3000);

console.log("Server listen on 3000");
