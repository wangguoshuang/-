var fs=require('fs');
// fs.readFile('./02io.js','utf8',(err,data)=>{
//     console.log(data);
// });

// fs.access('./0sdfsdf2.js',(err)=>{
//   try {
//     if(err) throw err;
//   } catch (error) {
//   }
// })

// try {
//   fs.accessSync('./02sfdasdfio.js');
// } catch (err) {
//   console.log("1"+err);
// }

var err=new Error('这是一个错误');
err.code=100;
console.log(err.code);
