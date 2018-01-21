<?php 
	header('content-type:text/html; charset= utf-8');
	// 将聊天的内容 抽取到 json文件中
	// 读取json文件
	$str = file_get_contents('info/messages.json');

	// echo $str;

	// 为了 使用方便 讲 字符串 转化为 对应的php对象(数组) 方便使用
	$data = json_decode($str); // 解码 字符串->php中的对象
	// print_r可以输出数组
	// print_r($data);


	// 获取随机的key

	$randomKey = array_rand($data,1);

	// 返回key对应的内容即可
	echo $data[$randomKey];

	// json_encode() // 编码 php->字符串
 ?>