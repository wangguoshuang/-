//引入http模块
var http=require('http');

var count=0;
//创建一服务器
http.createServer(function(req,res){

    count++;
    //返回一个200状态
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    res.end("我是服务器，我接收了"+count+"个请求。")

}).listen(3000);
