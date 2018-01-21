
'use strict'
const http = require("http");
const querystring = require("querystring");
const server = http.createServer();
//引入url
const url=require('url');

server.on('request', (req, res) => {
var urlObj= url.parse(req.url,true);
var pathname=urlObj.pathname;
var query=urlObj.query;
  if(pathname=='/test.js'&& req.method=='GET'){
          fs.readFile('./test.js','utf8',function(err,data){
                 res.end(data);   
          })
     }
    else if(pathname=='/1.html'&& req.method=='GET'){

          fs.readFile('./1.html','utf8',function(err,data){
                 res.end(data);     
          })
     }

});
server.listen(3000);
