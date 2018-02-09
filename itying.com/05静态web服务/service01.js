var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    var pathname = req.url;
    if ('/' == pathname) {/*默认加载首页*/
        pathname = '/index.html';
    }
    if ('/favicon.ico' != pathname) { /*过滤请求favicon.ico*/
        console.log(pathname);
        //文件操作获取static下面的index.html
        fs.readFile('static/'+pathname, function(err, data) {
            if (err) {  /*没有这个文件*/
                console.log('404');
            } else {    /* 返回这个文件*/
                res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
                res.write(data);
                res.end();
            }
        });
    }

}).listen(3000);

console.log("Server listen on 3000");