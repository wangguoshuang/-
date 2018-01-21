//加载http模块
var http=require('http');
//记录下请求的总数
var count=0;
//创建一个服务器应用
//监听请求和等待封装返回对象
http.createServer(function(req,res){
    count++;

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //整个请求流程已经结束了
     res.end("我是服务览器,我接收了"+count+"个请求。");

    // res.end("<div>我是服务览器</div>");
}).listen(3000);
