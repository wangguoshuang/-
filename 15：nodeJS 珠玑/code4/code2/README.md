#脏检查
###mvvm
mvc

mvvm
m model
v view
vm view-model $scope

###双向数据绑定



监听js里面值的变化：写一个循环执行的代码取一段时间去取一下值，看看变了没有
1.房贷计算器 车贷计算器
2.购物车
3.时间\人数
4.贵金属交易  有盘的这种，数据在实时变化的

###$watch
使用$watch监听$scope里面值的变化

###AngularJS是如何知道什么时候触发$watch？又如何取触发？

- 如果你是作者怎么办
  找一个函数来循环去检查scope中的数据是否发生了变化，
  发现有变化去更改相应的值
  
- 这个函数就是 ---->$scope.$digest()


当更改了$scope里面的值、$timeout、$interval等

自动触发一次$digest循环

###$digest
 $digest循环最少也会运行两次，即使在$watch的回调函数中并没有改变任何model。
如果$watch的回调函数中修改了$scope
$digest()最多迭代10次

###$apply()
$digest是一个内部函数，我们没法调用，
即使是AngularJS也并不直接调用$digest()，
而是调用$scope.$apply()，然后$scope.$apply()调用$rootScope.$digest()

###什么时候需要我们手动调用$apply()方法？
不在AngularJS的控制范围内去修改$scope里的值
例如$interval和setInterval
###$digest()的遍历
 并从$rootScope开始遍历(深度优先)检查数据变更。
