var fs = require("fs");

// 测试文件不存在时执行 err
fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});

console.log("程序执行完毕");