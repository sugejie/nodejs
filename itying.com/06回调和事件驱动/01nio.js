/**
 * 非阻塞IO(异步IO)
 * js顺序执行，不会等待异步程序
 */
var fs = require('fs');

console.log(1);

fs.readFile('mime.json', (err, data) => {
    // console.log(data);
    console.log(2);
});

console.log(3);