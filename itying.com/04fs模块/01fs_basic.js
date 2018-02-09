/**
 * 文件基本操作
 */
var fs = require('fs');

//1.fs.stat 判断文件或文件夹是否存在
// fs.stat('html', (err, status) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('文件：' + status.isFile());
//     console.log('目录：' + status.isDirectory());
// });

//2.fs.mkdir 创建目录
    //接收参数：
    // path         将创建的目录路径
    // mode         目录权限(读写权限),默认0777
    // callback     回调,传递异常参数err
// fs.mkdir('css', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('创建目录成功');
// });

//3.fs.writeFile 创建写入文件
    //接收参数：
    //filename      (String)             文件名称
    //data          (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
    //options       (Object)             option数组对象，包含：
    //  · encoding  (string)             可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
    //  · mode      (Number)             文件读写权限，默认值 438
    //  · flag      (String)             默认值 ‘w'
    //callback      {Function}           回调，传递一个异常参数err。
// fs.writeFile('t.txt', '你好nodejs 覆盖', 'utf-8', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功');
// });

//4.fs.appendFile 追加文件
// fs.appendFile('t1.txt', '这是写入的内容\n', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('追加成功');
// });

//5.fs.readFile 读取文件
// fs.readFile('t1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     // console.log(data); //16进制
//     console.log(data.toString());
// });

// 6.fs.readdir 读取目录
// fs.readdir('html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(data); //[ 'css', 'index.html', 'js' ]
// });

// 7.fs.rename 重命名
// 作用：1.改名 2.剪切
// fs.rename('html/index.html', 'html/new.html', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('修改名字成功');
// });

// 8.fs.rmdir 删除目录
// 注意：仅限空目录
// fs.rmdir('t', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('删除目录成功');
// });

// 9.fs.unlink 删除文件
// fs.unlink('index.txt', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('删除文件成功');
// });
