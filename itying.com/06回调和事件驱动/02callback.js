/**
 * 通过回调函数获取异步函数的返回值
 */
var fs = require('fs');

function getMime(callback) {
    fs.readFile('mime.json', (err, data) => {
        callback(data);
    });
}

getMime(function(result) {
    console.log(result.toString());
});
