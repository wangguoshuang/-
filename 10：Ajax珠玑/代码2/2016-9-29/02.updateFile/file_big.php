<?php 
	// 让php 延迟一会会儿
	// 让php代码 延迟一会 传入的是 秒
	// sleep(3);

	// 输出结果
	print_r($_FILES);

	// $_FILES的值
	/*
	Array ( [upFile] => Array ( [name] => yangyang.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\phpCC56.tmp [error] => 0 [size] => 18145 ) )
	*/
	// 获取 上传的文件信息 关系型数组
	$fileArr = $_FILES['upFile'];

	// 获取 上传的文件的原本名字
	$fileName = $fileArr['name'];
	echo $fileName.'<br>';

	// 获取 保存在服务器的那个位置
	$filePath = $fileArr['tmp_name'];
	echo $filePath.'<br>';

	// 知道 如何在php中 将文件保存
	// 参数2 写的是相对的路径 相对于该php文件 的files文件夹保存为的 123.png
	move_uploaded_file($filePath,'bigfiles/'.$fileName);
?>