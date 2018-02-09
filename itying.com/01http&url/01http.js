var http = require('http');

http.createServer(function (req, res) {
    //设置响应头
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
    
    res.write('Hello Node.JS');
    res.write('This is my first nodejs');

    res.end(); //结束响应,否则浏览器一直在转圈

}).listen(3000);

console.log("Server listen on 3000");