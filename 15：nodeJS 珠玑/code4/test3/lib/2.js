var fs =require('fs');
var path=require('path');
var rf=function(cb){
    console.log(path.join(__dirname,'./foo.text'));
    fs.readFile(path.join(__dirname,'./foo.text'),'utf8',(err,data)=>{
            cb(data);
    })
}
module.exports=rf;
