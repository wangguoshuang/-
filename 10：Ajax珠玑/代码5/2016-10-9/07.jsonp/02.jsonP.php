<?php 

	// 获取到了 eatFood.()   返回的是 eatFood();
	echo $_GET['callback'].'({"name":"西兰花炒蛋","color":"green"})';
 ?>