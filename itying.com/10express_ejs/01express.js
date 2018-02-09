/**
 * 
 * 1.cd 到项目目录
 * 2.npm init --yes创建package.json
 * 3.安装express
 * 4.引入express使用
 */

var express = require('express');   /*引入*/

var app = new express();    /*实例化,也可以不用new*/


app.get('/', function(req, res) {
    res.send('你好express');
});

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});