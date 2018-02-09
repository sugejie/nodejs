
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

        /*result是一个大对象,不只是数据库查询的记录*/
        // console.log(result); 

        result.each(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                if (doc != null) {
                    list.push(doc);
                } else {    /*doc==null表示数据循环结束*/
                    /*获取数据以后*/
                    // console.log(list);
                    ejs.renderFile('views/index.html', {
                        list:list
                    }, function(err, data) {
                        res.send(data);
                    });
                }
            }
        });

        db.close(); /*必须在最后关闭*/
    });
});


