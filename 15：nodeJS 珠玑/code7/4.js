'use strict'
const http = require('http');
const fs = require('fs');
const url = require('url');

//创建一个http服务器
const server = http.createServer();
//监听了一个请求事件request,response
server.on('request', (req, res) => {




var urlObj=url.parse(req.url,true);
console.log(urlObj);




//console.log(urlObj.pathname);
//urlObj对象的query属性是取参数
//console.log(urlObj.query);
  if (urlObj.pathname == '/' && req.method == 'GET') {

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    //向浏览器去写数据
    res.write('<h1>首页</h1>');
    //响应结束
    res.end();
  }
  else  if (urlObj.pathname == '/news' && req.method == 'GET') {

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    //向浏览器去写数据
    res.write('<h1>新闻</h1>');
    //响应结束
    res.end();
  }
  else {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    //向浏览器去写数据
    res.write('<h1>hello world</h1>');
    //响应结束
    res.end();
  }
});

server.listen(3000);

