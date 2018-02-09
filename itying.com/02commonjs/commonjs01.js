var http = require('http');
var str = require('./config.js'); /* 省却.js也可以 */

var app = http.createServer(function(req, res) {

    res.writeHead(200, {"Content-type":"text/html;charset:utf-8"});

    res.write('你好 nodejs<br>');

    res.write(str);

    res.end();

}).listen(3000, '127.0.0.1');

console.log("Server listen on 3000");
