var express = require('express');
var path = require('path');
//引入body-parser中间件
var bodyParser = require('body-parser');
var app = express();
//app.use(logger('dev'));

app.use(bodyParser.json()); // for parsing application/json 解析客户端发过来的json结构的数据
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded 

app.use(express.static(path.join(__dirname, 'public')));
//  app.post('/', function (req, res) {
   
//    console.log(req.body);
//    res.json(req.body);
//  })

//  app.get('/user/:id/:name', function(req, res){
//    console.log(req.params.id);
//    console.log(req.params.name);
//    res.send('user ' + req.params.id);
//  });
  app.get('/news', function(req, res){
  // console.log(req.query.q);
   //res.send('news ' + req.query.q);

   res.json({
    "count": 5,
    "start": 0,
    "total": 36,
    "subjects": [
        {
            "rating": {
                "max": 10,
                "average": 8.2,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "奇幻"
            ],
            "title": "奇异博士",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1009405/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
                    },
                    "name": "本尼迪克特·康伯巴奇",
                    "id": "1009405"
                }
            ],
            "collect_count": 39961,
            "original_title": "Doctor Strange",
            "subtype": "movie",
            "year": "2016",
            "images": {
                "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
                "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
                "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
            },
            "alt": "https://movie.douban.com/subject/3025375/",
            "id": "3025375"
        }, {
            "rating": {
                "max": 10,
                "average": 8.2,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "奇幻"
            ],
            "title": "奇异博士",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1009405/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
                    },
                    "name": "本尼迪克特·康伯巴奇",
                    "id": "1009405"
                }
            ],
            "collect_count": 39961,
            "original_title": "Doctor Strange",
            "subtype": "movie",
            "year": "2016",
            "images": {
                "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
                "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
                "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
            },
            "alt": "https://movie.douban.com/subject/3025375/",
            "id": "3025375"
        }
    ],
    "title": "正在上映的电影-北京"
});
  });
//    app.get('/hello', function(req, res){
//   // console.log(req.query.q);
//    //res.send('news ' + req.query.q);

//    res.end('hello world');
//  });
//    app.post('/news', function(req, res){
//    console.log(req.query.q);
//    res.send('news ' + req.body);
//  });
//    app.get('/shoe', function(req, res){
//    console.log(req.query.shoe);
//    res.send('news ' + req.query.shoe);
//  });
//  app.post('/shoe', function(req, res){
//    console.log(req.query.q);
//    res.send('news ' + req.query.q);
//  });
app.listen(3000);
module.exports = app;
// query是querystring

// 说明req.query不一定是get

// // GET /search?q=tobi+ferret
// req.query.q
// // => "tobi ferret"

// // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
// req.query.order
// // => "desc"

// req.query.shoe.color
// // => "blue"

// req.query.shoe.type
// // => "converse"
// 因为有变态的写法

// // POST /search?q=tobi+ferret
// {a:1,b:2}
// req.query.q
// // => "tobi ferret"
// post里看不的，用req.body取。







//  app.post('/', function (req, res) {
//     //取到body体内的信息,这个信息已经被转成了json数据了
//     console.log(req.query.a);
//       console.log(req.query.b);
//        console.log(req.body);
//       res.json(req.query.a);
//   // console.log(req.body);
//   // res.json(req.body);
//  })

// //取代参数的get请求的参数
// app.get('/user/:id/:name', function(req, res){
//   console.log(req.params.id);
//   console.log(req.params.name);
//   res.send('user ' + req.params.id);
// });
// app.get('/news', function(req, res){
//   console.log(req.query.q);
//   res.send('news ' + req.query.q);
// });