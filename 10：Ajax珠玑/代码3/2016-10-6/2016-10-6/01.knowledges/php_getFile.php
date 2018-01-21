<?php 
	
	// 设置编码格式
	header('content-type:text/html; charset= utf-8');

	// 测试 读取文件的 函数 注意 需要返回 file_get_contents 仅仅只是读取而已
	 echo  file_get_contents('info/news.text');
 ?>