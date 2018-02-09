var fs = require('fs')

// 阻塞代码读取文件
var data = fs.readFileSync('input.txt')

console.log(data.toString())
console.log("程序执行结束!")