<?php 
	// 获取 post数据
	$key = $_POST['name'];

	// 获取 一个value 这里使用 关系型数组
	$starArr =array(
		'baby'=>'images/baby.jpg',
		'hxm'=>'images/hxm.jpg',
		'lh'=>'images/lh.jpg'
		);

	// 传入key 获取 对应的value
	$value = $starArr[$key];

	// 返回给 浏览器 即可
	echo $value;

 ?>