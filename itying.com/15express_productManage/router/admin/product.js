var express = require('express');

var multiparty = require('multiparty');

var fs = require('fs');

var DB = require('../../modules/db.js');

//使用express.Router 类创建模块化、可挂载的路由句柄
var router = express.Router();


// /admin/product
router.get('/', function(req, res) {
    DB.find('product', {}, function(err, data) {
        res.render('admin/product/index', {
            list: data
        });
    });
});

// /admin/product/add
router.get('/add', function(req, res) {
    res.render('admin/product/add');
});

router.post('/doadd', function(req, res) {
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
                res.redirect('/admin/product');
            }
        });
    });
});

// /admin/product/edit
router.get('/edit', function(req, res) {
    // 获取get 传值id
    var id = req.query.id;
    DB.find('product', {
        _id: new DB.ObjectID(id) /*注意：mongodb中的_id需要转换*/
    }, function(err, data) {
        res.render('admin/product/edit', {
            list: data[0]
        });
    });
});

//编辑商品
router.post('/doedit', function(req, res) {
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
                res.redirect('/admin/product');
            }
        });
    });
});

// /admin/product/delete
router.get('/delete', function(req, res) {
    var id = req.query.id;
    DB.find('product', {
        _id: new DB.ObjectID(id)
    }, function(err, data) {
        if (!err) {
            fs.unlink(data[0].pic);
        }
    });
    DB.delete('product', {
        _id: new DB.ObjectID(id)
    }, function(err, data) {
        if (!err) {
            res.redirect('/admin/product');
        }
    });
});

module.exports = router;