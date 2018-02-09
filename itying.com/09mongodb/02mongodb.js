
var http = require('http');
var url = require('url');
var ejs = require('ejs');

var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/itying';

var app = require('./model/express-router');

http.createServer(app).listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

app.get('/', function(req, res) {
    MongoClient.connect(dburl, function(err, db) {
        if (err) {
            console.log(err);
            console.log('连接数据库失败');
            return;
        }
        var list = [];  /*存放查询的所有数据*/
        var result = db.collection('user').find();

        // console.log(result); /*result不只是数据库的记录*/

        result.each(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                if (doc != null) {
                    list.push(doc);
                } else {    /*doc==null表示数据循环结束*/
                    console.log(list);
                }
            }
        });

    });
});



