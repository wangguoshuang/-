<?php

	$list = array(
		array('id'=>1, 'pid'=>2, 'text'=>'我很丑可是我很温柔'),
		array('id'=>2, 'pid'=>2, 'text'=>'浦公英的约定'),
		array('id'=>3, 'pid'=>2, 'text'=>'你我的约定'),
		array('id'=>4, 'pid'=>3, 'text'=>'pretty boy'),
		array('id'=>5, 'pid'=>3, 'text'=>'See You Again'),
		array('id'=>6, 'pid'=>2, 'text'=>'甜甜的'),
		array('id'=>7, 'pid'=>1, 'text'=>'再见 我的爱人'),
		array('id'=>8, 'pid'=>2, 'text'=>'心中的日月'),
		array('id'=>8, 'pid'=>3, 'text'=>'Let It Go'),
		array('id'=>10, 'pid'=>1, 'text'=>'不要说再见'),
		array('id'=>11, 'pid'=>3, 'text'=>'Rise'),
		array('id'=>12, 'pid'=>2, 'text'=>'再见'),
		array('id'=>13, 'pid'=>1, 'text'=>'追梦人'),
		array('id'=>14, 'pid'=>2, 'text'=>'不能说的秘密'),
		array('id'=>15, 'pid'=>4, 'text'=>'고속도로 로맨스'),
		array('id'=>16, 'pid'=>1, 'text'=>'昨日重现'),
		array('id'=>17, 'pid'=>3, 'text'=>'Love Me Like You Do'),
		array('id'=>18, 'pid'=>2, 'text'=>'好久不见'),
		array('id'=>19, 'pid'=>1, 'text'=>'独角戏'),
		array('id'=>20, 'pid'=>2, 'text'=>'K歌之王'),
		array('id'=>21, 'pid'=>1, 'text'=>'往事随风'),
		array('id'=>22, 'pid'=>2, 'text'=>'光辉岁月'),
		array('id'=>23, 'pid'=>3, 'text'=>'Just Like Fire'),
		array('id'=>24, 'pid'=>4, 'text'=>'涙の物语'),
		array('id'=>25, 'pid'=>4, 'text'=>'江南Style'),
		array('id'=>26, 'pid'=>4, 'text'=>'ガラガラ'),
		array('id'=>27, 'pid'=>1, 'text'=>'海阔天空'),
		array('id'=>28, 'pid'=>4, 'text'=>'天空之城'),
		array('id'=>29, 'pid'=>4, 'text'=>'사랑이었다'),
		array('id'=>30, 'pid'=>3, 'text'=>' Good Time'),
		array('id'=>31, 'pid'=>1, 'text'=>'不再犹豫'),
		array('id'=>32, 'pid'=>4, 'text'=>'さよならの夏 ～コクリコ坂から～'),
		array('id'=>33, 'pid'=>3, 'text'=>' Heart And Soul'),
		array('id'=>34, 'pid'=>4, 'text'=>'넘버나인 '),
		array('id'=>35, 'pid'=>1, 'text'=>'往事只能回味'),
		array('id'=>36, 'pid'=>3, 'text'=>'Bang Bang'),
		array('id'=>37, 'pid'=>4, 'text'=>'君が好きだと叫びたい'),
		array('id'=>38, 'pid'=>3, 'text'=>'Same Old Love'),
		array('id'=>39, 'pid'=>4, 'text'=>'君をのせて'),
		array('id'=>40, 'pid'=>1, 'text'=>'恋恋风尘')
	);

	// 接收pid
	$pid = $_GET['pid'];

	$result = array();

	foreach ($list as $key => $value) {

		if($value['pid'] == $pid) {
			$result[$key] = $value;
		}
	}

	echo json_encode($result);

?>