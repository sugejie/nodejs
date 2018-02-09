var express = require('express');

var session = require('express-session'); /*session模块*/

var md5 = require('md5-node'); /*md5加密密码*/

//获取post数据+上传图片;enctypr="multipart/form-data"
var multiparty = require('multiparty'); /*图片上传模块*/

var fs = require('fs');

var DB = require('./modules/db.js');

var app = express(); /*实例化*/

/*********************配置部分*********************/
// 配置模板引擎 - ejs
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// 配置静态web服务
app.use(express.static('public'));
// 静态web服务：上传的图片/upload/xxx.jpg
app.use('/upload', express.static('upload'));

// 配置中间件 - session
app.use(session({
    secret: '123456', /*加密字符串*/
    resave: false, /*强制保存session,默认true*/
    saveUninitialized: true, /*强制将未初始化的session存储,默认true*/
    cookie: {
        maxAge: 5 * 60 * 1000 
    },
    rolling: true /*一段时间无操作才过期*/
}));
/*********************配置结束*********************/



/*********************路由部分*********************/
app.get('/', function(req, res) {
    res.redirect('/product');
});

//登录
app.get('/login', function(req, res) {
    res.render('login');
});

//执行登录
app.post('/dologin', function(req, res) {
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
        var username = fields.username[0];
        var password = md5(fields.password[0]);
        DB.find('user', {
            username: username,
            password: password
        }, function(err, data) {
            if (data.length > 0) {
                // 保存查询到的用户信息
                req.session.userinfo = data[0];
                res.redirect('/product'); //重定向=>商品列表
            } else {
                res.send("<script>alert('登陆失败');location.href='/login';</script>");
            }
        });
    });
});

//登出
app.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
});

//自定义中间件 - 判断登陆状态
app.use(function(req, res, next) {
    if (req.session.userinfo && req.session.userinfo.username) {
        // ejs设置全局数据
        app.locals['userinfo'] = req.session.userinfo;
        next();
    } else {
        res.redirect('/login');
    }
});

//商品列表
app.get('/product', function(req, res) {
    DB.find('product', {}, function(err, data) {
        res.render('product', {
            list: data
        });
    });
});

//显示增加商品的页面
app.get('/productadd', function(req, res) {
    res.render('productadd');
});

app.post('/doproductadd', function(req, res) {
    var form = new multiparty.Form();
    form.uploadDir = 'upload'; /*文件存放路径;目录必须存在*/

    form.parse(req, function(err, fields, files) {
        var product = {
            title: fields.title[0],
            price: fields.price[0],
            fee: fields.fee[0],
            description: fields.description[0],
            pic: files.pic[0].path
        };
        DB.insert('product', product, function(err, data) {
            if (!err) {
                res.redirect('/product'); /*上传成功,跳转到首页*/
            }
        });
    });
});

//显示编辑商品页
app.get('/productedit', function(req, res) {
    // 获取get 传值id
    var id = req.query.id;
    DB.find('product', {
        _id: new DB.ObjectID(id) /*注意：mongodb中的_id需要转换*/
    }, function(err, data) {
        res.render('productedit', {
            list: data[0]
        });
    });
});
//编辑商品
app.post('/doproductedit', function(req, res) {
    var form = new multiparty.Form();
    form.uploadDir = 'upload';

    form.parse(req, function(err, fields, files) {
        var product = {
            title: fields.title[0],
            price: fields.price[0],
            fee: fields.fee[0],
            description: fields.description[0]
        };
        var originalFilename = files.pic[0].originalFilename;
        var pic = files.pic[0].path;
        if (originalFilename) { /*修改图片;更新数据库;删除旧图片*/
            product.pic = pic;
            if (fields.pic_origin[0]) {
                fs.unlink(fields.pic_origin[0]);
            }
        } else { /*未修改图片;删除临时图片*/
            fs.unlink(pic);
        }

        DB.update('product', {
            _id: new DB.ObjectID(fields.id[0])
        }, product, function(err, data) {
            if (!err) {
                res.redirect('/product'); /*上传成功,跳转到首页*/
            }
        });
    });
});

//删除商品
app.get('/productdelete', function(req, res) {
    var id = req.query.id;
    DB.delete('product', {
        _id: new DB.ObjectID(id)
    }, function(err, data) {
        if (!err) {
            res.redirect('/product');
        }
    });
})
/*********************路由结束*********************/





//启动服务
app.listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
});