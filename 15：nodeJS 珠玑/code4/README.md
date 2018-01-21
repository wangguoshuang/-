#node-lesson3
#1.复习
### 反馈
再讲下package.json的编写
3m不太清除，readfile不太清楚
可以讲快点，晚上留时间复习
## 1.0 nvm常用命令
- nvm项目地址：[nvm-github地址](https://github.com/coreybutler/nvm-windows)
- 查看所有已安装的本地的node版本
`nvm list`
- 切换node版本
` nvm use 版本号`
- 安装指定版本的node
` nvm install 版本号 位数`
- 卸载已安装的指定版本的node
` nvm uninstall 版本号`

###1.1模块的分类

```模块分为核心模块、文件模块，其中包是一种特殊的文件模块 ```
- 核心模块
  + fs file system
  + http
  + os
  + path
  + querystring
  + url

###1.2模块三兄弟 require、module、exports

- require的实现原理

```把代码从文件中读出来，用匿名函数的方式头尾包装，返回modules.exports对象，曝露出想要曝露出来的属性、方法、对象。
   补充了exports是指向modules.exports的一个指针，exports能做的，modules.exports都能做的。 
```

- require查找文件、包原理

```.js、.node、.json依次帮你补足，
   第二次加载的时候优先从缓存查找读取，
   node_modules中没有的，从父文件夹中查找，如果没有，直到根目录为止
```
- module
```
里面保存了模块的信息路径、父子信息、曝露出的对象信息
```
- exports
```
module.exports 别名
module.exports=123;已经使用过一次了，exports就不生效了
module.exports.a=12;这样使用,exports是还可以使用的

```

###1.4包
```
   package.json是包的说明书，
   dependencies当前包所依赖的包：>、<、>=、<=、~、*、" "、X、^、
    devDependencies 开发环境中包所依赖的包：
```
###1.5npm
```
  npm init  创建package.json文件
  npm install  将package.json中的文件依赖的包从网上下载到本地
  npm install -save 包名  将包下载下来并且加载到dependencies中去
  npm i -S 包名 替代上面的命令
  npm install -save-dev 包名 将包下载下来并且加载到devDependencies中去
  npm i -D 包名 替代上面的命令
  npm install -g 包名 全局安装  安装的是全局工具
  npm docs 包名 查看包的文档
  
```
###1.6nrm npm的数据源管理工具
```
nrm ls 查看npm的数据源
nrm use 切换npm下载包的地址
nrm test  测试下哪个数据源快
```
### 1.7 3m
npm node的包管理工具
nvm node的版本管理工具
nrm npm的数据源管理工具
###1.8箭头函数
```
语法糖替代function(){}  v=>v
```
#2.i/o
###2.1什么是i/o？

```
   io input、output 输入输出，电脑的输入输出，例如音频录音表示声音输入、听音乐是声音的输出
   网络上的传输全部是在传字符串，i/o在服务器上可以理解为读写操作。
```
###2.2什么是并发？
```
   一个时间段中有几个程序都处于已启动运行到运行完毕之间。
```
#3异步i/o与事件驱动
###3.1什么是进程？
```
进程是为运行当中的应用程序提供运行环境的
一个运行当中的应用程序就会有一个进程与之相对应
```
###3.2什么是线程？
```
线程是用来运行应用程序中代码的，
一个线程在一个时间只能做一件事件。
多线程，调度起来很麻烦。
node是单线程执行，用异步替代了多线程
```

###3.3同步、异步有什么不同？
```
异步不会阻塞后面的代码，同步会阻塞后面的代码
一条线程先执行同步的代码后执行异步的代码。
```
###3.4异步非i/o操作和异步i/o操作
```
异步非io setTimeout setInterval
异步IO操作 操作文件 网络操作 fs
```

###3.5node的事件驱动模型？
![Alt text](./pic/event-loop.png)
```

```
###3.5异步和多线程的比较？
```
node的异步是帮助我们去做了多线程的操作，简化了代码
```

#4.文件操作
###4.1文件的完整读写
```
fs模块---》操作文件---》io----》node的特长
fs模块是node非常重要的模块，能体现出node的优势
```
- fs.readFile()  读文件
- fs.writeFile()  写文件
- fs.appendFile() 在文件的内部去追加写一些内容
- fs.mkdir() 创建文件夹
- fs.readdir() 读文件夹
- fs.access() 判断路径
- fs.stat()
 isFile：用于判断被查看的对象是否为一个文件，如果是返回true，否则，返回false；
 isDirectory：用于判断被查看的对象是否为一个目录，如果是的话则返回true，否则，返回false；
 isSymbolicLink：用于判断被查看的文件是否为一个符号链接文件，如果是的话则返回true，否则，返回false。该方法仅在lstat方法的回调函数中有效；
 
#5.异常处理
什么是异常？
计算机不能处理的状况称之为异常
try catch 只能捕获同步异常
try {
  fs.accessSync('./02sfdasdfio.js');
} catch (err) {
  console.log("1"+err);
}
异步异常对象和被try catch捕获的对象是一样的



#6.path




