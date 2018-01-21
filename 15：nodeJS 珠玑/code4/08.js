var fs=require('fs');

//access不光可以判断文件还可以判断文件夹
fs.access('./a',(err)=>{
})

fs.stat('./a',(err,stats)=>{
   if(stats.isDirectory()){
      console.log("是文件夹");
   }
   else{
       console.log("不是文件夹");
   }


   
})