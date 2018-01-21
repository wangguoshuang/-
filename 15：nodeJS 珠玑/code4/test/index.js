var fs =require('fs');
module.exports=rf;

var rf=(path)=>{
    fs.readFile(path,'utf8',(err,data)=>{
         return data;
    })
}