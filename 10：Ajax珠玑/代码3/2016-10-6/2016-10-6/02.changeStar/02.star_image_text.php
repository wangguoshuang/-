<?php 
	// 获取 post数据
	$key = $_POST['name'];

	// 获取 一个value 这里使用 关系型数组
	$starArr =array(
		'baby'=>array('images/baby.jpg','Angelababy，中文名杨颖，1989年2月28日出生于上海，中国内地影视女演员、模特'),
		'hxm'=>array('images/hxm.jpg','baby的老公,教主,著名男演员,最近演了一部烂片'),
		'lh'=>array('images/lh.jpg','红魔,傻狍子,小鲜肉,萌萌哒,我家有一副1米的海报')
		);

	// 使用key  获取 对应的value 这里是一个 数组

	$oneStar = $starArr[$key];

	// 将 数组中的 两个 值 都返回给用户
	echo $oneStar[0];

	// 为了 在浏览器分隔方便 这里 添加一个分隔符
	echo '|';

	echo $oneStar[1];

 ?>