//引入一个模块，模块名叫fs
var fs=require('fs');
//读文件
// fs.readFile('./foo.js','utf8',function(err,data){
//           console.log(data);
// })

var data=fs.readFileSync('./foo.js','utf8');
console.log(data);




var fs=require('./foo');
