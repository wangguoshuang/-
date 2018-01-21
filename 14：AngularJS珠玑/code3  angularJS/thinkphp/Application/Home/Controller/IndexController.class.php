<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        // $this->show('111111');

    	// 可以直接调用某个Model

    	$title = '测试MVC';

    	// 将这个数据分配给了下面的视图
    	$this->assign('title', $title);

    	// 展示视图
        $this->display();

    }
}