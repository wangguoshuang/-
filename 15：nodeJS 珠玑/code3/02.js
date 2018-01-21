var fs=require('fs');

//第一个参数是路径
//第二个是编码格式
//第三个回调函数
fs.readFile('./assdfasdfdasf01.js','utf8',(err,data)=>{
     if(err) throw err;
      //console.log(err);
    console.log(123);


})

var data=fs.readFileSync('./assdfasdfdasf01.js','utf8');