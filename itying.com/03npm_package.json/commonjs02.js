//npm install md5-node安装依赖后package.json中不会自动添加

//注意：以后安装模块时要把模块添加到package.json中

// npm install md5-node --save //运行时依赖
// 或 
// npm install md5-node --save-dev //开发时依赖
 
var md5 = require('md5-node');

console.log(md5('123456'));

