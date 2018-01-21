<?php 
	
	// 测试数据
	// echo '服务器发送的信息'.$_POST['starName'];

	// 定义 关系数组 保存 图片信息 
	//  如果 有1k张图片 那么使用switch  会十分复杂并且实际开发中此类数据  会以类似的结构 保存在数据库中
	$pictureList = array(
		'onePiece' =>'img/onePiece.jpg' ,
		'lyh' =>'img/liyanhong.jpg' ,
		'my' =>'img/mayun.jpg' ,
	);
	
	// 获取 提交的 key
	$key = $_POST['starName'];
	// 根据key 获取 对应的 value  并返回给用户
	echo $pictureList[$key];
 ?>