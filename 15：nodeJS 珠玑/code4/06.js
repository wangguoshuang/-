var fs=require('fs');
//第一参数路径
//第二个写的内容
//第三个编码格式
//第四个回调函数 

//多次写入会把原来的内容覆盖
//文件不存在的时候会创建文件，但是不会创建文件夹
// fs.writeFile('./a/2dfsasdfsadf.txt','hello~~~~ feifei','utf8',(err)=>{
//   console.log(err);

// })
//fs.writeFileSync('./2.text','hello feifei','utf8');

fs.appendFile('./2.txt','追加一下呵呵~~~咳咳','utf8',(err)=>{


})