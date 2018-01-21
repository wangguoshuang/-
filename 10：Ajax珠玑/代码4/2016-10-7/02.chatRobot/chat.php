<?php 
	// 获取 用户发送的数据
	$message = $_POST['message'];

	// 准备一些 随机的值
	$chatMessages = array(
			'讨厌',
			'你好(⊙o⊙)哦',
			'O(∩_∩)O~',
			'老地方见',
			'死鬼,',
			'小丹丹'
		);

	// 要从数组中 获取一个 随机的值
	/*
		参数1 数组
		参数2 要获取 几个 随机的键
		array_rand(array,number)
	*/
		$randomKey = array_rand($chatMessages,1);

		// 使用随机的 索引值 获取 对应的 内容
		echo $chatMessages[$randomKey];

 ?>