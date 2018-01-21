const fs=require('fs');


// fs.readFile('00.js',(err,data)=>{
//      console.log(data);

// })


var buf=new Buffer(5);

buf[0]=0x61;
buf[1]=0x6e;
const buf2 = new Buffer([0x62,0x75,0x66,0x66,0x65,0x72]);
console.log(buf2.toString());

