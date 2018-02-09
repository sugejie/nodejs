/**
 * 1.项目下需要有一个package.json，否则npm install安装包会警告;
 * 2.项目移动时可以根据package.json下载node_modules下的依赖包;
 *     npm init --yes：自动生成package.json
 *     npm install：会根据package.json下载依赖
 * 
 */
var http = require('http');
var sd = require('silly-datetime');

http.createServer((req, res) => {
    
    res.writeHead(200, {"Content-Type":"text/html;charset:utf-8"});

    var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

    res.write(d);

    res.end();

}).listen(3000);
