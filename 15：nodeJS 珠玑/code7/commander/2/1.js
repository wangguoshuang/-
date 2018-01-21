#!/usr/bin/env node
//引入commander包
var program = require('commander');
var value=require('./1.json');

var fs=require('fs');
var path=require('path');
//对命令行进行配置
//version配置版本
//usage用什么属性去配置命令options
//option配置命令的
//3个参数
//第一参数是命令，-t是缩写、--test是全称，<cm>是参数
//第二个参数是命令的解释
//第三个参数是命令的具体执行的方法
var test="这是一个测试命令~~";
var fnTest=function(val){
  console.log(__dirname);

  console.log(process.cwd());
  fs.writeFile(path.join(process.cwd(),'/foo.js'),'hello','utf8',(err)=>{


  })

  


  // var v=val.split('#');
  // console.log(v);
  // console.log(val);
  // console.log(val2);
  // //console.log(123);

}
program
  .version('0.0.1')
  .usage('[options]')
  .option('-t, --test <cm>#<cm2>',test,fnTest)

//将上面代码配置的内容传给commander
program
  .parse(process.argv);
  //process.argv一个包含命令行参数的数组
