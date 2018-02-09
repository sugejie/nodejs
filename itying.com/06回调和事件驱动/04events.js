/**
 * events 处理异步
 * 通过events获取异步读取的文件数据
 */
var fs = require('fs');
var events = require('events');

var eventEmitter = new events.EventEmitter();

function getMime() {
    fs.readFile('mime.json', (err, data) => {
        eventEmitter.emit('data', data);
    });
}

getMime();

//监听广播数据
eventEmitter.on('data', function(mime) {
    console.log(mime.toString());
});