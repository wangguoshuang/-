'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 获取当前请求路径,客户端的所有请求路径都是以 / 开头的
  let url = req.url;

  console.log(`当前请求路径是：${url}`);

  // 根据不同的请求路径，做不同的响应处理
  switch (url) {
    case '/':
      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      break;
    case '/login':
      // res.end('login site');
      fs.readFile(path.join(__dirname, 'login.html'), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      break;
    case '/register':
      res.end('register site');
      break;
    case '/about':
      res.end('index site');
      break;
    case '/favicon.ico':
      res.end();
      break;
    case '/css/main.css':
      fs.readFile(path.join(__dirname, 'css/main.css'), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      break;
    case '/main.js':
      fs.readFile(path.join(__dirname, 'main.js'), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      break;
    case '/01.jpg':
      fs.readFile(path.join(__dirname, '01.jpg'), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
      break;
    default:
      res.end('404 Not Found');
      break;
  }
});

server.listen(3000);
