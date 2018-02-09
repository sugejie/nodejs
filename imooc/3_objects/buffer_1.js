// 创建长度为 10 字节的 Buffer 实例
var buf1 = new Buffer(10)
// 通过给定的数组创建 Buffer 实例
var buf2 = new Buffer([10, 20, 30, 40, 50])
// 通过一个字符串来创建 Buffer 实例：
var buf3 = new Buffer("www.runoob.com", "utf-8")

// 写入缓冲区
var buf4 = new Buffer(256)
len = buf4.write('www.runoob.com')
console.log('写入字节数：' + len)

// 从缓冲区读取数据
var buf5 = new Buffer(26)
for (var i = 0 ; i < 26 ; i++) {
  buf5[i] = i + 97;
}
console.log( buf5.toString('ascii') );       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf5.toString('ascii', 0, 5) );   // 输出: abcde
console.log( buf5.toString('utf8', 0, 5) );    // 输出: abcde
console.log( buf5.toString(undefined, 0, 5) ); // 使用 'utf8' 编码, 并输出: abcde

// 将 Buffer 转换为 JSON 对象
var buf6 = new Buffer('www.runoob.com');
var json = buf6.toJSON(buf6);
console.log(json);

// 缓冲区合并
var buffer7 = new Buffer('菜鸟教程 ');
var buffer8 = new Buffer('www.runoob.com');
var buffer9 = Buffer.concat([buffer7, buffer8]);
console.log("buffer9 内容: " + buffer9.toString());


// ......
