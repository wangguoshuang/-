//require操作的时候其实是去硬盘中去读js文件
//把放入module对象当中去，内存中缓存中）
var add=require('./test/add.js').add;
//var obj=require('./add.js');
console.log(add(1,1));
//console.log(obj.add(1,1));


