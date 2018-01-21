//定义模块
//第一个require
//第二个exports
//第三个module

//var exports=module.exports;
//exports=123;
//define(function(require, module.exports, module){})
define(function(require, exports, module) {

  var $ = require('jquery');

  function Spinning(container) {
    this.container = $(container);
    this.icons = this.container.children();
    this.spinnings = [];
  }

//通过module.exports曝露出想要曝露的方法
  //module.exports = Spinning;
//exports是module.exports的别名,用属性的方式去曝露属性或方法，通俗点 用.的方式
//返回的永远是module.exports，初始状态是一个{}空对象
  //module.exports = 123;
   exports.bar=4565555;
  Spinning.prototype.render = function() {
    this._init();
    this.container.css('background', 'none');
    this.icons.show();
    this._spin();
  }

  Spinning.prototype._init = function() {
    var spinnings = this.spinnings;

    $(this.icons).each(function(n) {
      var startDeg = random(360);
      var node = $(this);
      var timer;

      node.css({
        top: random(40),
        left: n * 50 + random(10),
        zIndex: 1000
      }).hover(
          function() {
            node.fadeTo(250, 1)
                .css('zIndex', 1001)
                .css('transform', 'rotate(0deg)');

          },
          function() {
            node.fadeTo(250, .6).css('zIndex', 1000);
            timer && clearTimeout(timer);
            timer = setTimeout(spin, Math.ceil(random(10000)));
          }
      );

      function spin() {
        node.css('transform', 'rotate(' + startDeg + 'deg)');
      }

      spinnings[n] = spin;
    })

    return this;
  }

  Spinning.prototype._spin = function() {

    $(this.spinnings).each(function(i, fn) {
      setTimeout(fn, Math.ceil(random(3000)));
    });

    return this;
  }

  function random(x) { return Math.random() * x };

});

