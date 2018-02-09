/**
 * 1.foo默认在目录下查找，没有的话在node_modules查找
 * 2.bar/bar最终在node_module下查找
 * 3.nav文件夹引入nav.js
 */
var foo = require('foo');
var bar = require('bar/bar');
var nav = require('nav');

console.log(foo);
console.log(bar);
console.log(nav);

