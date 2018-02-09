
var url = require('url');

//封装方法，改变res，绑定res.send
function changeRes(res) {
    res.send = function(data) {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
    }
}

//暴露的模块
var Server = function() {

    var G = {};     /*全局变量*/

    G._get = {};    /*注册的get方法*/
    G._post = {};   /*注册的post方法*/

    var app = function(req, res) {

        changeRes(res);

        //获取路由
        var pathname = url.parse(req.url).pathname;
        //获取请求方式get or post
        var method = req.method.toLowerCase();

        if (G['_' + method][pathname]) {

            if ('post' == method) { /*执行post请求*/

                var postStr = '';
                req.on('data', function(chunk) {
                    postStr += chunk;
                });
                req.on('end', function() {
                    req.body = postStr; /*拿到post的值*/
                    G['_' + method][pathname](req, res); /*执行方法*/
                });

            } else {    /*执行get请求*/
                G['_' + method][pathname](req, res); /*执行方法*/
            }
            
        } else {
            res.end('no router');
        }
    }

    app.get = function(string, callback) {
        G._get[string] = callback;   /*执行注册操作*/
    }

    app.post = function(string, callback) {
        G._post[string] = callback;   /*执行注册操作*/
    }

    return app;
}

module.exports = Server();

