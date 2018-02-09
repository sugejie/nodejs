var fs = require('fs');
var path = require('path');
var url = require('url');

//获取文件类型，私有
function getMime(extname, callback) {
    var data = fs.readFileSync('./static/mime.json');
    var mimes = JSON.parse(data.toString());
    var result = mimes[extname] || 'text/html';
    callback(result);
}

exports.statics = function(req, res, staticpath) {

    var pathname = url.parse(req.url).pathname;

    if ('/' == pathname) {  /*默认加载首页*/
        pathname = '/index.html';
    }

    if ('/favicon.ico' != pathname) {   /*过滤请求favicon.ico*/
        //获取文件后缀名
        var extname = path.extname(pathname);

        //文件操作获取static下面的index.html
        fs.readFile(staticpath+pathname, function(err, data) {
            if (err) {  /*没有这个文件*/
                // console.log('404');
                fs.readFile(staticpath+'/404.html', function(err, data404) {
                    if (err) {
                        console.log('404');
                    }
                    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end();
                });
            } else {    /*返回这个文件*/
                getMime(extname, function(mime) {
                    res.writeHead(200, {"Content-Type":mime+";charset='utf-8'"});
                    res.write(data);
                    res.end();
                });
            }
        });
    }

}