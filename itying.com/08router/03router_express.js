
var http = require('http');
var url = require('url');

var G = {}; /*保存所有注册过的方法*/

//定义方法开始结束
var app = function(req, res) {

    var pathname = url.parse(req.url).pathname;

    // 修改pathname：/login=>/login/
    if (!pathname.endsWith('/')) {
        pathname = pathname + '/';
    }

    if (G[pathname]) {
        G[pathname](req, res);
    } else {
        res.end('no router');
    }
}

//定义get方法
app.get = function(string, callback) {
    //修改key为：login=>/login/
    if (!string.endsWith('/')) {
        string = string + '/';
    }
    if (!string.startsWith('/')) {
        string = '/' + string;
    }
    G[string] = callback;   /*执行注册操作*/
}

//只要有请求,就会触发app方法
http.createServer(app).listen(3000);

//注册login这个路由（方法）
app.get('login', function(req, res) {
    console.log('login');
    res.end('login');
});
app.get('register', function(req, res) {
    console.log('register');
    res.end('register');
});

console.log("Server listen on 3000");