'use strict'

 const fs=require('fs');


// fs.readFile('./00.js','utf8',(err,data)=>{
//     if(err) throw err;
//     fs.readFile('./00.js','utf8',(err,data)=>{
//          if(err) throw err;
//             fs.readFile('./00.js','utf8',(err,data)=>{
//                  if(err) throw err;
//                     fs.readFile('./00.js','utf8',(err,data)=>{


//                     })

//             })

//     })

// })


// fs.readFile('./00.js','utf8',(err,data)=>{


// }).then(fs.readFile('./00.js','utf8',(err,data)=>{


// })).then(fs.readFile('./00.js','utf8',(err,data)=>{


// }))

var rf=function(){
 return new Promise(function(resolve, reject){
        fs.readFile('./00.js','utf8',(err,data)=>{
            if(err){
                //失败
               reject(err);

            }
            else{
                //成功
               resolve(data);

            }
        })
    })
}
//then里面的第一个方法是成功，第二个方法都是失败
rf().then(function(data){


    console.log("执行成功");
},function(){

})