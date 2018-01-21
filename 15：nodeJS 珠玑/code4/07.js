var fs=require('fs');


// fs.mkdir('./a',(err)=>{


// })
//callback 里面的参数多了一个files
//files以数组的形式呈现
fs.readdir('./a',(err,files)=>{
   console.log(files);
})