//定义一个模块，对外隔离，具有封装性
//第一个参数require是用来加载模块的
define(function(require) {
//require('./spinning')得到了Spinning()
  var Spinning = require('./spinning').bar;
console.log(Spinning);
 // var s = new Spinning('#container');
  //s.render();
module.exports = 123;
});

