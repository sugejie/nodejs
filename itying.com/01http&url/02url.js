var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    //浏览器访问http://localhost:3000/news?aid=123
    //跳过/favicon.ico
    if ("/favicon.ico" != req.url) {
        console.log(req.url);
        console.log(url.parse(req.url, true));
        console.log("aid=" + url.parse(req.url, true).query.aid);
    }
    res.writeHead(200, {"Content-Type":"text/html;charset:utf-8"});
    res.write("Hello World");
    res.end();
}).listen(3000);

console.log("Server listen on 3000");



/**
 * 1.parse（第二个参数是true表示把get传值转成json）
 * url.parse("http://www.baidu.com/news?name=zhangsan&age=20", true)
 * 结果：
 *  Url {
 *    protocol: 'http:',
 *    slashes: true,
 *    auth: null,
 *    host: 'www.baidu.com',
 *    port: null,
 *    hostname: 'www.baidu.com',
 *    hash: null,
 *    search: '?name=zhangsan&age=20',
 *    query: { name: 'zhangsan', age: '20' },   //获取GET传值
 *    pathname: '/news',                        //获取URI
 *    path: '/news?name=zhangsan&age=20',
 *    href: 'http://www.baidu.com/news?name=zhangsan&age=20' }
 */

/**
 * 2.format（一般不用）
 * url.format({
 *      protocol: 'http:',
 *      slashes: true,
 *      auth: null,
 *      host: 'www.baidu.com',
 *      port: null,
 *      hostname: 'www.baidu.com',
 *      hash: null,
 *      search: '?name=zhangsan&age=20',
 *      query: { name: 'zhangsan', age: '20' },
 *      pathname: '/news',
 *      path: '/news?name=zhangsan&age=20',
 *      href: 'http://www.baidu.com/news?name=zhangsan&age=20' })
 * 结果：
 *  'http://www.baidu.com/news?name=zhangsan&age=20'
 */

/**
 * 3.resolve（替换uri）
 * url.resolve("http://www.baidu.com/index", "news")
 * 结果：
 *  http://www.baidu.com/news
 */