<?php 
	
	// 休息一会
	sleep(1);

	// 获取 用户发送的 消息  (可选)
	// 后端 对于 用户发过来的 时候 是否 使用 (可选)
	
	// 根据 发送 过来的 消息 返回 不同的内容
	$messageList =array(
		'你好啊^_^',
		'我没有吃饭哦',
		'老地方见',
		'讨厌',
		'死鬼  嘿嘿嘿' 
	 );

	// 从 数组中 每次 随机 取出
	// array_rand 返回的 是一个 随机的 下标
	$randomKey = array_rand($messageList,1);

	// 使用 随机 下标 返回 随机的 值
	echo $messageList[$randomKey];


 ?>