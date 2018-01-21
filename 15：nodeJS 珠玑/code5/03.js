'use strict'
//原始的写法
var a = [];

for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}

a[6]();


'use strict'
//使用let每一个i值只作用于一个{}内
var a = [];

for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}

a[9]();



// let a=123;
// {
//   a=456;

// }
// console.log(a);