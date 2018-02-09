var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('onput2.txt'));
console.log("文件解压完成。");


// 不能加密解密放一个文件
// 异步操作，加密未执行完就执行解密，一边写一边读