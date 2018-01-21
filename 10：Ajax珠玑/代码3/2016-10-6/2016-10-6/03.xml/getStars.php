<?php 
	
	// 设置返回的是 xml
	header('content-type:text/xml; charset= utf-8');

	// 读取并返回 oh -yeah
	echo file_get_contents('info/starList.xml');
 ?>