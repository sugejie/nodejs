/**
 * 使用mongodb
 * 1.安装mongodb
 *     npm install mongodb --save
 * 2.var MongoClient = require('mongodb').MongoClient
 *   var url = 'mongodb://localhost:27017/myproject';//数据库地址
 * 3.连接数据库
 * 4.实现CRUD
 */
var http = require('http');
var ejs = require('ejs');
var url = require('url');

var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/itying';

var app = require('./model/express-router');

http.createServer(app).listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});

app.get('/', function(req, res) {
    var msg = '这是数据库的数据';
    ejs.renderFile('views/index.html', {msg:msg}, function(err, data) {
        res.send(data);
    });
});

app.get('/add', function(req, res) {
    //连接数据库
    MongoClient.connect(dburl, function(err, db) {
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return;
        }
        //增加数据
        db.collection('user').insertOne({
            name: '大地',
            age: 10
        }, function(err, result) {
            if (err) {
                console.log('增加数据失败');
                return;
            }
            res.send('增加数据成功');
            db.close(); /*关闭数据库*/
        });
    });
});


app.get('/edit', function(req, res) {
    MongoClient.connect(dburl, function(err, db) {
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return;
        }
        //增加数据
        db.collection('user').updateOne({
            name: '大地'
        }, {
            $set:{age: 60}
        }, function(err, result) {
            if (err) {
                console.log('修改数据失败');
                return;
            }
            res.send('修改数据成功');
            db.close(); /*关闭数据库*/
        });
    });
});


app.get('/delete', function(req, res) {

    var query = url.parse(req.url, true).query;

    MongoClient.connect(dburl, function(err, db) {
        if (err) {
            console.log(err);
            console.log('数据库连接失败');
            return;
        }
        db.collection('user').deleteOne({
            name:'张三'
        }, function(err, result) {
            if (err) {
                console.log('删除失败');
                return;
            }
            console.log(result);
            res.send('删除成功');
            db.close();
        });
    })
});



