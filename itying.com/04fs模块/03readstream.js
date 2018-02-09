const fs = require('fs');

//流的方式读取文件

var readStream = fs.createReadStream('input.txt');

var str = '';/*保存数据*/ 
var count = 0;/*读取次数*/
readStream.on('data', function(chunk) {
    str += chunk;
    count++;
});

//读取完整
readStream.on('end', function() {
    console.log(str);
    console.log(count);
});

//读取失败
readStream.on('error', function(err) {
    console.log(err);
});