var fs=require('fs');

//第一个参数
fs.access('./01.js', (err) => {
  //console.log(err ? 'no access!' : 'can read/write');
   if(err){
     throw err;
   }
    fs.readFile('./01.js','utf8',(err,data)=>{
        console.log(123);


    })

});