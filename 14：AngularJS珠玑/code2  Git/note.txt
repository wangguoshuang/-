

一、如何创建存盘点 （实现版本控制）

1、	git branch 分支名称  查看 git branch

2、	git checkout cart  git add git commit -m 

3、	git checkout master git add git commit -m 

4、	git checkout cart git add git commit -m  
	git merge master git add git .....

5、	git branch -d/D 分支名称


二、分支解决了（多任务）

	1、	git branch 分支名称 （创建一个新分支）

	2、	git checkout cart 分支名称 （切换分支）

	3、	git add ... git commmit -m ...

	4、	git checkout master 其它分支 git add ... git commit -m ...

	5、	git merge master

	6、	git branch -d/D 没用的分支


三、远程仓库实现 （多人协同开发）

	1、	远程仓库创建 xxx.git、git init --bare

	2、	本地也要有一个仓库
	 git add ... git commit -m ...
	 git branch
	 git checkout 
	 git add ... git commit -m ...

	 git push 远程仓库的地址 分支master

	 git pull 远程仓库的地址 分支master

	 git remote add 短的名字  真实的地址

	 git clone 远程仓库地址 = mkdir 目录  +  cd 目录下 + git init + git remote add origin 远程仓库地址



