/**
 * express路由模块化
 */
var http = require('http');
var ejs = require('ejs');

var app = require('./model/express-router');

http.createServer(app).listen(3000);

app.get('/login', function(req, res) {
    console.log('login');
    ejs.renderFile('views/login.html', {}, function(err, data) {
        res.send(data);
    });
});
app.post('/dologin', function(req, res) {
    console.log(req.body);
    res.send("<script>alert('登陆成功');history.back();</script>");
});
app.get('/register', function(req, res) {
    console.log('register');
    res.send('register');
});

console.log('Server listen on 3000');