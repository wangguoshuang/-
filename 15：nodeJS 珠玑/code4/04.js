//1.配餐员做什么事情   1配餐 2盯着炸薯条
//2.飞飞老师做什么事情   1吃

var doSometing=function(callback){
     setTimeout(function() {
      var food="炸薯条";
       
         callback(food);   
     }, 10000);
    console.log("配餐");
    console.log("配餐");
    console.log("配餐");
}
//飞飞老师的吃函数
var eat=function(food){
     console.log("吃"+food);
}
//和飞飞老师聊完以后，达成了共事
doSometing(eat);


doSometing(function(food){
     console.log("吃"+food);
});
