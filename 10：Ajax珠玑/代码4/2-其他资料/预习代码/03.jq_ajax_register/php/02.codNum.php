<?php 
	// 实际开发中 是随机生成的数字 这里 使用 随机数 来模拟
	// 随机生成一个 验证码
	$nums = array('119','911','12580','110','120','114'  );

	// 随机 抽取出一个  array_rand返回的是 一个 随机的 索引
	$randomKey =  array_rand($nums);

	echo $nums[$randomKey];

 ?>