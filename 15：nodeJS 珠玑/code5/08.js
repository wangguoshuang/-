const fs=require('fs');
// const rs = fs.createReadStream('./1.avi');

//  const ws = fs.createWriteStream('./2.avi');
//    rs.pipe(ws);


const rs = fs.createReadStream('./1.avi');
 const ws = fs.createWriteStream('./2.avi');
rs.on('data',function(chunk){
    console.log(chunk.length);
   ws.write(chunk);
})
rs.on('end',function(){
    console.log("结束了呢~~~~~");
    ws.end();

})








