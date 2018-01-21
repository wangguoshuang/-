<?php 
	// 获取get的数据
	// 这里是获取 提交的希望注册的用户名
	$name = $_GET['userName'];

	// 准备一个 数据 模拟 所有已经存在的用户名
	$nameArr = array('jack','rose','iceMountain','boat');

	// 验证 某个值 是否在数组中 存在
	/*	
	参数1:查询的值
	参数2:查询的数组
	参数3:判断类型 可选值
		in_array(search,array,type)
	*/
	// 检验 是否存在 并且接受返回值
	// 布尔类型 不能直接用echo输出
	$result = in_array($name,$nameArr);

	// 通过 if else 返回 不同的值 给浏览器
	if ($result) {
		echo "have";
	}else{
		echo "not_have";
	}

 ?>