// 一般要为会触发error事件的对象设置监听器,避免整个程序崩溃
var events = require('events'); 

var emitter = new events.EventEmitter(); 

emitter.on('error', function() {
	console.log('程序发生错误');
})

emitter.emit('error'); 