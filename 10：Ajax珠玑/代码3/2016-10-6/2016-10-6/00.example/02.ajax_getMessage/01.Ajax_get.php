<?php 
	$twoDArr = array(
		 array('肯德基','肯打鸡' ),
		 array('麦当劳','麦当娜' ),
		 array('必胜客','pizza and more' )
		);

	// 网络传输时 没有 数组 的概念
	echo $twoDArr[2][0];
	echo '|';
	echo $twoDArr[2][1];
	
	// 可以吧 数据的 类型 里面的值全部输出
	// var_dump($twoDArr[2]);
	
	// print_r($twoDArr[2]);
	
 ?>