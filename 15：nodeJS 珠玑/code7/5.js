   var poster=require('http-poster');
    poster.get('http://www.baidu.com',function(err,res,data){ 
       console.log(res);
       console.log(data);
     });