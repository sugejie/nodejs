/**
 * 实现express功能（GET请求）
 */
var G = {}; /*保存所有注册过的方法,GET*/

var app = function(req, res) {
    //这里写死，只能处理login请求
    if (G['login']) {
        G['login'](req, res);
    }
}

//定义get方法
app.get = function(string, callback) {
    G[string] = callback;
}

//调用app.get,为app注册login方法
app.get('login', function(req, res) {
    console.log('login');
})

//执行
setTimeout(function() {
    app('req', 'res');   
}, 1000);
