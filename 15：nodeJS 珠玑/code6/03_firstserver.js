'use strict'

const http=require('http');
const fs=require('fs');

//创建一个服务，创建了一个服务器的实例
var server= http.createServer();
//request对象，这个对象用来存储请求报文里面的信息的
//response对象，是用来帮助我们封装响应报文的
//response对象是一个写的流对象
server.on('request',(request,response)=>{

  if(request.url=='/'&&request.method=='GET'){


      fs.readFile('./1.html',"utf8",(err,data)=>{
        response.writeHead(200,{"Content-Type":"text/html;charset:utf-8;"})
        response.write(data);
        response.end();
        
      });

  }
  else if(request.url=='/test.js'&&request.method=='GET'){

      fs.readFile('./test.js',"utf8",(err,data)=>{
         response.writeHead(200,{"Content-Type":"application/x-javascript;charset:utf-8;"})
         response.write(data);
         response.end();
        
      });


  }  else if(request.url=='/favicon.ico'&&request.method=='GET'){

 

                      response.end();
  }
  
})

server.listen(3000);