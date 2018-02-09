var express = require('express');

var admin = require('./router/admin.js');
var index = require('./router/index.js');

var app = express(); /*实例化*/


//挂载路由
//admin
app.use('/admin', admin);

//index
app.use('/', index);






//启动服务
app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});