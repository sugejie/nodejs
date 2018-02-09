var fs = require('fs')

// 异步方式读取文件(非阻塞)
fs.readFile('input.txt', function(err, data) {
	if (err) {
		console.error(err)
	}
	// console.log(data) //这样输出二进制数据
	console.log(data.toString())
})

console.log("程序执行结束!")