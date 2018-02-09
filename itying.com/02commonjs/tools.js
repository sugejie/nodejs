/**
 * tools模块
 * 用于commonjs02.js中测试
 */
var tools = {
    add: function (x, y) {
        return x + y;
    },
    sayHello: () => {
        return '你好 nodejs';
    }
};

//这样暴露出去的方法是obj.tools.sayHello()
// exports.tools = tools; 

module.exports = tools;
