# HTTP服务搭建

标签（空格分隔）： 网络开发

---




## AMP
>AMP:**A:**`Apache`,**M:**`MySQL`,**P:**`PHP`
* **Apache**
世界排名第一的服务器软件,特点是`简单`,`速度快`,`性能稳定`

* **MySQL**
得益于他体积小、速度快、使用成本低，而且是开源哦，所以很多网站都选用**MySql**作为他们的数据库.

* **PHP**
展开后PHP: Hypertext Preprocessor，中文名：`超文本预处理器`,直接将代码嵌入`HTML` 文档中执行,简单易学,容易上手.

## AMP集成环境
>刚刚已经解释了这几个单词的意思,其中`AMP`是三个独立的软件,但是对于初学者而言分别安装以及配置需要掌握一定的软件知识,所以就有了很多`AMP`集成环境帮助我们简化安装

* **WAMP:**
在`windows`平台下如果想要一步到位安装好这些软件,可以使用`wamp`,其中w的意思为`windows`指的是windows操作系统
软件的官网为:[wamp官方网站][1]

* **XAMPP:**
不同于`wamp`针对于`windows`,`XAMPP`可以安装在`Linux`,`Windows`,`MAC OS X`,`Solaris`这些操作系统上面


## WAMP安装,配置,注意点
> 这里选用`wamp`作为学习环境,接下来演示如何安装并设置wamp

### WAMP安装
![wampSteps.gif-600.2kB][2]
1. 双击提供的安装包
2. 点击`Next`
3. 选择安装路径,注意:**不要使用中文路径**.建议使用跟图片一致的路径
4. 如果担心安装完成后找不到`wamp`可以将两个方框全部勾选,点击`next`继续安装
5. 点击`install`开始安装
6. 安装完毕以后点击`finish`即可启动`wamp`
7. 启动完成能够在任务栏的右下角看到这个图标即表示安装成功![image_1alref1o416psincp5dqr1e9c4c.png-1.5kB][3]


### 测试访问
>打开浏览器输入`127.0.0.1`查看显示的内容,如果是第一次安装,默认显示的应该是如下图片

* **127.0.0.1含义:**
`127.0.0.1`是回送地址，指本地机，一般用来测试使用,如果想要让其他电脑也能够访问,需要进行一些配置,详见下文.

![wamp08.png-174.3kB][4]

### WAMP图标橙色解决方案
>如果没有使用过自己的电脑配置服务器那么`WAMP`默认应该为绿色的图标,那么如果WAMP启动,显示的是橙色图标怎么办呢?![wamp07.png-1.2kB][5]

1.检查是否开启了服务:保证`Apache`,`MySQL`的服务都是启动状态即可
![wamptest.gif-708.2kB][6]

2.检查是否开启了微软自带的`IIS服务`:首先打开控制面板,保证动态图最后选中的`Internet Information Services`没有被勾选即可
![closeIIS.gif-663.6kB][7]

3.修改端口号:在`httpd.conf`中搜索 listen,大概在46行的位置

```
    Listen 80
    改为 listen 8080
    注这里可以改为任意的端口,修改完毕之后, 保存并重启wamp
    访问时在ip地址之后添加:8080 端口号即可
    如 192.168.18.125:8080
```
4.未测试方法:

```
解决办法:
1.网上邻居->本地连接->属性->internet协议(TCP/IP)->属性->高级->wins标签->去掉启用LMhosts查询前的勾.

2.控制面版->windows防火墙->高级标签->本地连接设置->服务的标签里勾选安全Web服务器(HTTPS)即可.

(这上下两项完成后仍然有问题，选中：启用 TCI/IP 上的 NetBOIS.）

选择其一即可，但是为什么这么做没搞懂
```

5.意外:卸载-删除文件夹(wamp安装的文件夹)-重装

### 配置局域网访问
>安装好了`WAMP`之后就能够通过自己的浏览器输入`127.0.0.1`,如果想要让同一局域网中的其他电脑也能够访问,需要进行如下配置


* **关闭防火墙:**首先打开`控制面板`

![closeDef.gif-579.1kB][8]

* **修改`httpd.conf文件`**
因为`Apache`的配置默认不允许外部访问,我们需要修改配置
找到`D:\wamp\bin\apache\Apache2.2.21\conf`文件
使用文本编辑工具打开,通过搜索功能找到`onlineoffline tag - don't remove`这句话
```
将在234行附近的 
Allow from 127.0.0.1
替换为
Allow from all 

```
保存,然后重启`wamp`的所有服务即可

* **获取本机IP地址:**
    * **方法1:** 
        * 打开`控制面板->网络和Internet->网络和共享中心->更改适配器设置`
        * 找到正在连接的网络,`双击`
![getIp01.gif-877.2kB][9]
    * **方法2:**
        * 打开命令行工具
        * 输入`ipconfig`
![getIp02.gif-544.3kB][10]

* **局域网内访问:**
使用一台相同局域网内的`拥有浏览器`的设备即可通过刚刚获取的`IP地址进行访问`

* **常见的通局域网计算机:**
>局域网的概念这里不做拓展,为了方便测试当满足下列情况可以尝试访问

    * 连接同一个`wifi`的计算机(手机也可以测试)
    * 连接同一个`交换机`的计算机
        * 同教室的电脑
        * 同公司的电脑


### 配置网站根目录
>(**注:** *这里使用的路径为上述安装时的路径,如果没有安装在D盘,那么需要找到对应的路径*)

* **找到`WAMP`的安装目录:**`D:\wamp`

* **找到`Apache`的配置文件**
`D:\wamp\bin\apache\Apache2.2.21\conf`

* **修改`http.conf`文件**
使用文本编辑工具打开`httpd.conf`文件,搜索`documentRoot`
如果是初次安装,应该分别在`178`行,`205`行
修改完毕以后记得保存`ctrl+s`

![documentRoot.gif-2245.2kB][11]

* **重启`WAMP`服务**
左键点击`wamp`图标,选择`重新启动所有服务`
![restWamp.gif-166kB][12]

* **建立文件夹,尝试访问**
为了保证访问时确实有内容,在`E:`盘下建立`www`文件夹,并且在改文件夹下放入文件,再次尝试通过`127.0.0.1`进行访问
![visitWWW.gif-760.4kB][13]






    


  [1]: http://www.wampserver.com/en/
  [2]: http://static.zybuluo.com/antumuFish/ahc7r09bv82114dm0yf2qegy/wampSteps.gif
  [3]: http://static.zybuluo.com/antumuFish/y2vhy4kaazhtwdbmek359ldm/image_1alref1o416psincp5dqr1e9c4c.png
  [4]: http://static.zybuluo.com/antumuFish/ll4988qkaignddg2okjhutjx/wamp08.png
  [5]: http://static.zybuluo.com/antumuFish/gwx0rgj5je8094xd2zc4lgmj/wamp07.png
  [6]: http://static.zybuluo.com/antumuFish/gvs0tmp0i0563jq7otypeigj/wamptest.gif
  [7]: http://static.zybuluo.com/antumuFish/yjkqhvbqyanx3b52881kn7lg/closeIIS.gif
  [8]: http://static.zybuluo.com/antumuFish/i1xss4v50jel8v3w0ta8wvz4/closeDef.gif
  [9]: http://static.zybuluo.com/antumuFish/c1z38r6wb2hsm6j1ernga3fl/getIp01.gif
  [10]: http://static.zybuluo.com/antumuFish/k9b8jdj3e7n2idyeamgu8z8g/getIp02.gif
  [11]: http://static.zybuluo.com/antumuFish/fybojfaavamtu3rapwu0dvqr/documentRoot.gif
  [12]: http://static.zybuluo.com/antumuFish/pcfudtnuh7s0pt226f96kal5/restWamp.gif
  [13]: http://static.zybuluo.com/antumuFish/eko70jme9shij0zs2418gmiq/visitWWW.gif
