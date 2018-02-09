
var ejs = require('ejs');

var app = {

    login: function(req, res) {
        ejs.renderFile('views/login.html', [], function(err, data) {
            res.end(data);
        });
    },

    dologin: function(req, res) {
        var postStr = '';
        req.on('data', function(chunk) {
            postStr += chunk;
        });
        req.on('end', function(err) {
            console.log(postStr);
            res.end("<script>alert('登陆成功');history.back();</script>");
        });
    },

    register: function(req, res) {
        console.log('register');
        res.end('register');
    },

    home: function(req, res) {
        console.log('home');
        res.end('home');
    }
};

module.exports = app;
