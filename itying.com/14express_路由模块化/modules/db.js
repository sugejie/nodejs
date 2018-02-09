var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://127.0.0.1/itying';

var ObjectID = require('mongodb').ObjectID;

function __connectDB(callback) {
    MongoClient.connect(dburl, function(err, db) {
        if (err) {
            console.log(err);
            return ;
        }
        callback(db);
    });
}

//暴露ObjectID
exports.ObjectID = ObjectID;

//查询数据
exports.find = function(collectionName, json, callback) {
    __connectDB(function(db) {
        var result = db.collection(collectionName).find(json); 
        result.toArray(function(error, data) {
            // if (error) {
            //     console.log(error);
            //     return;
            // }
            db.close(); /*关闭数据库连接*/
            callback(error, data); /*拿到数据执行回调函数*/
        });
    });
}

//增加数据
exports.insert = function(collectionName, json, callback) {
    __connectDB(function(db) {
        db.collection(collectionName).insertOne(json, function(error, data) {
            callback(error, data);
        }); 
    });
}

//更新数据
exports.update = function(collectionName, json1, json2, callback) {
    __connectDB(function(db) {
        db.collection(collectionName).updateOne(json1, {$set:json2}, function(error, data) {
            callback(error, data);
        }); 
    });
}

//删除数据
exports.delete = function(collectionName, json, callback) {
    __connectDB(function(db) {
        db.collection(collectionName).deleteOne(json, function(error, data) {
            callback(error, data);
        }); 
    });
}
