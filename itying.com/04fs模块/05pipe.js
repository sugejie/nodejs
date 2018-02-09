/**
 * 管道流
 * 从input.txt读入数据，写到output.txt中
 */
const fs = require('fs');

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
readStream.pipe(writeStream);

console.log('程序执行完毕');