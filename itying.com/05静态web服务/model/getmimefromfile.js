/*根据后缀名从mime.json文件中获取类型*/

exports.getMime = function(fs, extname) {
    /*
     * 注意：
     *    1.这里的当前路径代表调用这个模块的文件路径,即service04.js
     *    2.fs.readFile异步执行,外部获取不到返回值
     */
    // 异步:
    // fs.readFile('./static/mime.json', function(err, data) {
    //     if (err) {
    //         console.log('json文件不存在');
    //         return false;
    //     }
    //     // console.log(data.toString());
    //     var mimes = JSON.parse(data.toString());
    //     return mimes[extname] || 'text/html';
    // });

    //同步:
    var data = fs.readFileSync('./static/mime.json');
    var mimes = JSON.parse(data.toString());
    return mimes[extname] || 'text/html';


}