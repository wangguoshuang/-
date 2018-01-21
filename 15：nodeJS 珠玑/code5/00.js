//错误--->异常 计算机解决不了的问题
var err=new Error('这是我自定义的错误对象');
err.code=100;

console.log(err.message);
console.log(err.stack);
console.log(err.code);



















var fs=require('fs');

try {
  //同步
  fs.readFileSync('./asdfasdfsdf.js','utf8');
 //异步里面别throw ，外面try catch捕获不到异步的异常
   fs.readFile('./asdfasdfsdf.js','utf8',(err,data)=>{
               if(err) {
               };

   });


} catch (error) {
 // throw error;
     console.log(error);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
}


console.log(1);
console.log(2);
console.log(3);
console.log(4);

//console.log(err.message);
//console.log(err.stack);
//console.log(err.code);

//throw err;

