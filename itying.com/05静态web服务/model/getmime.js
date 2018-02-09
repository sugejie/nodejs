/*根据后缀名返回文件类型*/
exports.getMime = function(extname) {
    switch(extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}