主要内容
    1.Express安装
    2.Express静态和动态路由
    3.Express获取请求传值
        - 动态路由传值 
            /news/:aid      => req.params.aid
        - GET传值 
            /news?aid=123   => req.query.aid

    4.Express中ejs的使用和参数配置
        - express 里面使用ejs,安装以后不需要引入
        - 模板引擎：ejs/jade
            - 改成html
                app.engine('.html', require('ejs').__express);
                app.set('view engine', 'html');
        - 模板位置（默认：views）
            app.set('views', __dirname + '/views');

    5.静态web服务（访问静态资源）
        - 为public下面的文件提供静态web服务
            app.use(express.static('public'));
        - 配置虚拟静态web服务
            app.use('/static', express.static('public'));