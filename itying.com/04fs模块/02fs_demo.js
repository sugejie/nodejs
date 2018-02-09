/**
 * 两个文件读写的小例子
 */
var fs = require('fs');



//1.判断服务器有没有upload目录，没有的话创建
// fs.stat('upload', (err, status) => {
//     if (err) {
//         fs.mkdir('upload', (err) => {
//             if (err) {
//                 console.log(err);
//                 return false;
//             }
//             console.log('创建成功');
//         });
//     } else {
//         console.log('目录已经存在');
//         console.log(status.isDirectory());
//     }
// });




//2.找出html目录下面的所有子目录,然后打印出来
var filesArr = [];
fs.readdir('html', function(err, files) {
    if (err) {
        console.log(err);
        return false;
    }
    // console.log(files);
    //判断是目录还是文件夹
    
    // 注意：错误写法，fs.stat是异步执行的
    // for (var i=0; i<files.length; i++) {
    //     fs.stat(files[i], function(err, status) {
    //         console.log(files[i]);
    //     });
    // }
    
    // 可以考虑使用forEach代替for循环
    // files.forEach(function(item) {
    //     fs.stat(item, function(err, status) {
    //         console.log(item);
    //     });
    // });

    //PS:个人总结:
    //  for循环中,每次fs.stat调用都是处于同一个作用域,变量i在内存中是同一个
    //  forEach传递的是item对象，不存在i变化的情况，并且自带回调函数，形成了函数作用域
    //  递归调用,通过创建自执行函数,确保i在局部作用于中,因此父函数i++不会影响

    //递归匿名函数
    (function getFile(i) {
        if (i>=files.length) {
            console.log(filesArr);//打印出所有目录
            return false;
        }
        fs.stat('html/'+files[i], function(err, status) {
            // console.log(files[i]);
            if (status.isDirectory()) {
                filesArr.push(files[i]);//保存目录
            }
            //递归调用
            getFile(++i);
        });
    })(0);
});

