//获取了calculator包里面的index.js曝露出来的module.exports
var cal=require('calculator');
console.log(cal.add(1,1));
console.log(cal.substract(1,1));
console.log(cal.multiply(1,1));
console.log(cal.divide(1,1));