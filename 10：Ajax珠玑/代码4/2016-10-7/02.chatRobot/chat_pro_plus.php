<?php 
	// 获取用户的数据
	$message = $_POST['message'];

	// switch
	/*
		每一次的随机 都是 先
			读取json文件  str
			json_decode() str->php数组
			获取随机的key	array_rand
			通过随机的key 返回 对应的值 echo $arr[$key]
	*/
	switch ($message) {
		case '你好':
			//读取json文件
			$jsonStr = file_get_contents('info/hello.json');
			// str->php数组
			$chatArr = json_decode($jsonStr);
			// 随机key
			$randomKey = array_rand($chatArr,1);
			// 返回key对应的值
			echo $chatArr[$randomKey];
			break;
		default:
			# code...
			break;
	}
 ?>