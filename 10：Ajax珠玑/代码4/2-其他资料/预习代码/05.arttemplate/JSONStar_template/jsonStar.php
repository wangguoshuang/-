<?php 
	// 获取文件
	$starsStr = file_get_contents('json/stars.json');
	// 返回文件
	echo $starsStr;
 ?>