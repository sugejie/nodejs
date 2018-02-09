/**
 * express使用ejs模板引擎
 *   1.安装ejs模块
 *   2.配置express模版引擎
 *     app.set('view engine', 'ejs');
 *     express 里面使用ejs,安装以后不需要引入
 *   3.在express中使用ejs
 *   4.ejs参数配置
 */
var express = require('express');
var app = express();

app.listen(3000, 'localhost', function() {
    console.log('Server listen on 3000');
});

/*配置模板引擎;（模板：ejs/jade）;这里把模板改为HTML*/
app.engine('.html', require('ejs').__express); /*设置HTML引擎*/
app.set('view engine', 'html'); /*配置HTML引擎*/

/*模版位置;（默认：views）*/
app.set('views', __dirname + '/views');

/*静态web服务(脱管静态文件),可以配置多个*/
//1.配置虚拟静态web服务
app.use('/static', express.static('public'));
//2.为public下面的文件提供静态web服务
app.use(express.static('public'));



/*静态路由*/
app.get('/', function(req, res) {
    res.render('index'); /*渲染模版*/
});

app.get('/news', function(req, res) {
    var arr = [111, 222, 333];
    res.render('news', {
        list:arr
    }); /*渲染模版*/
});

/*动态路由*/
app.get('/news/:aid', function(req, res) {
    res.send(req.params.aid);
});
