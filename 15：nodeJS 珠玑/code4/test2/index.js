var rf=require('test');



// rf('./foo.txt',(data)=>{

// console.log(data);

// })

var callback=function(data){
   console.log(data);
    
}
console.log(module);
rf('./foo.txt',callback);