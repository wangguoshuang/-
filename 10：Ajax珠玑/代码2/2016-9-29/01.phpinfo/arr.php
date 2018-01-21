<?php 
	header('content-type:text/html; charset= utf-8');
	// 二维数组
	$twoArr = array(
			array('西兰花','西葫芦','西红柿'),		
			array('牛肉','羊肉','鸭肉','驴肉','鸡肉'),		
			array('白菜','油菜','娃娃菜'),		
			array('皮皮虾','大闸蟹','生蚝','龙虾')	
		 );

	// 娃娃菜
	echo  $twoArr[2][2];// 一步搞定

	echo '<br>';

	// 首先 取出 索引为2的 元素 这里是一个 数组
	$vegetableArr = $twoArr[2];

	// php中 输出 变量的 详细内容 print_r() 是一个 php预定义的 函数 传递参数的 方式 直接在括号中 写入即可

	print_r($vegetableArr);
	
	echo '<br>';
	echo  $vegetableArr[2];


 ?>