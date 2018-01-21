<?php 
	
	// 设置编码格式
	// 需要 修改 header 告诉 浏览器 我这里返回的是 xml文件
	header('content-type:text/xml; charset= utf-8');

	// 测试 读取文件的 函数 注意 需要返回 file_get_contents
	// 这里 读取一个 叫做 xml的文件 必须准备一个 .xml文件
	 echo  file_get_contents('info/person.xml');
 ?>