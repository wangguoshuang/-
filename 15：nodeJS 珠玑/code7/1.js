'use strict'
const http=require('http');
//创建一个服务器的实例，创建的是 http.Server这个对象
const server=http.createServer();
//
//监听request事件,当有请求发送到服务器的时候，触发了request事件
//触发完成了就调用了callback函数了
//请求对象request\响应对象response
//http模板帮你去做了封装，请求报文封装到了request对象里面。
//http.IncomingMessage是request，除了是一个对象外，还是一个读文件流
//使用response里面的方法构造响应报文,调用response里面的方法，将响应报文扔回去

//response是http.ServerResponse对象 是一个写文件流
server.on('request',function(request, response){
        //console.log(request.headers);
        console.log(request.httpVersion);
        console.log(request.method);
        console.log(request.url);

        if(request.url=='/news.html'&&request.method=='GET'){

                    response.end('<div>新闻</div>');

        }
        else if(request.url=='/login'&&request.method=='GET'){
                response.end('<div>登录1</div>');


        }
        else if(request.url=='/login'&&request.method=='POST'){
                response.end('success');


        }
    //参数1.状态码，2.往报文头里写的内容
    //response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    //向响应报文的报文体写内容
    //response.write('<h1>hello</h1>');
    //response.end('world');
       // response.end('world');
  
})
server.listen(3000);