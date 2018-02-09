
var url = require('url');

function changeRes(res) {
    res.send = function(data) {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
    }
}

var Router = function() {

    var G = {};
    G._get = [];
    G._post = [];

    var app = function(req, res) {

        changeRes(res);

        var pathname = url.parse(req.url).pathname;
        
        var method = req.method.toLowerCase();

        if (G['_'+method][pathname]) {
            if ('post' == method) {
                var postStr = '';
                req.on('data', function(chunk) {
                    postStr += chunk;
                });
                req.on('end', function() {
                    req.body = postStr;
                    G['_'+method][pathname](req, res);
                });
            } else {
                G['_'+method][pathname](req, res);
            }
        } else {
            res.end('no router');
        }

    }

    app.get = function(string, callback) {
        G._get[string] = callback;
    };

    app.post = function(string, callback) {
        G._post[string] = callback;
    }

    return app;
}

module.exports = Router();