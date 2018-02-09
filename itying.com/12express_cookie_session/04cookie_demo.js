/**
 * cookie 
 *     实现记住浏览记录
 */
var express = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

app.get('/', function(req, res) {
    res.send('浏览过的城市:' + req.cookies.citys);
});

app.get('/lvyou', function(req, res) {
    var city = req.query.city; /*获取当前城市*/
    var citys = req.cookies.citys; /*获取所有城市*/
    if (citys) { /*citys有值*/
        citys.push(city);
    } else { /*citys不存在*/
        citys = [city];
    }
    res.cookie('citys', citys, {maxAge: 60 * 1000});
    res.send('浏览的城市:' + city);
});
