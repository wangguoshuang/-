<?php 
	// 回去 数据库 查询 是否 有该用户名
	// 这里 我们使用数组 代替
	$nameLists = array('littlefox','crazyfox','blackfox','orangeyellowfox' );

	// 验证用户名是否存在 ajax 提交过来的用户名
	$isIn = in_array($_GET['userName'],$nameLists);

	// 如果 存在 那么 就不能再次 使用该用户名
	if ($isIn) {
		echo "用户名存在";
	}else{
		echo "用户名不存在";
	}
 ?>