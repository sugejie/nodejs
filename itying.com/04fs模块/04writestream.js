const fs = require('fs');

//流的方式写入文件
var data = '我是从数据库获取的数据，我要保存起来\n';

var writeStream = fs.createWriteStream('output.txt');

for (var i=0; i<10; i++) {
    writeStream.write(data, 'utf-8');
}

//标记写入完成
writeStream.end();

//writeStream.end();广播一个finish事件
writeStream.on('finish', function() {
    console.log('写入完成');
});

//失败
writeStream.on('error', function() {
    console.log('写入失败');
});