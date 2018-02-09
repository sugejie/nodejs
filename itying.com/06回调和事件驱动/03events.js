/**
 * events模块处理异步
 */
var events = require('events');

// console.log(events);

var eventEmitter = new events.EventEmitter();

//广播和接收广播

eventEmitter.on('to_mime', function(data) {
    console.log(data);
});

//监听to_parent的广播
eventEmitter.on('to_parent', function(data) {
    // console.log('接收到了这个广播事件');
    console.log(data);
    eventEmitter.emit('to_mime', '给mime发送数据');
});

setTimeout(function() {
    console.log('开始广播');
    //广播to_parent事件
    eventEmitter.emit('to_parent', '发送的数据');
}, 2000);
