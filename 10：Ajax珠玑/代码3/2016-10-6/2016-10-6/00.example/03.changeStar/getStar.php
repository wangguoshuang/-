<?php 
	// 准备数据
	$starList = array(
		'jay' =>'images/jay.jpg|哎哟,我去,不错哦' ,
		'baby' =>'images/baby.jpg|奔跑吧.晓明哥哥_加油哦↖(^ω^)↗' ,
		'fourFather' =>'images/wql.jpg|诗诗,想我了吗,我很想你哦' 
		 );
	// 通过$_GET[]获取 浏览器发送过来的key
	$key = $_GET['starName'];

	echo $starList[$key];

 ?>