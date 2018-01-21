
// 为 jq 添加 插件
// 注册完毕以后 使用 $("xxx").fun 使用 
$.fn.extend({
	becomeYellow:function () {
		console.log('变黄了哦 嘿嘿嘿');

		// 在这个方法中 我们可以使用 $('选择器')获取的 jq对象
		// this 就是 我们获取到的jq对象 
		// 注意 容易 搞混 jq对象 跟dom对象 所以 这里 建议
		// 一看到 $_开头的 就知道 是jq对象 防止 跟dom对象弄混
		var $_this = this;
		$_this.css({backgroundColor:'yellow'});

		// jq有一个特点是 链式编程

		// 为了能够链式编程 建议 return 当前使用的jq对象
		return $_this;
	}
});


// 注册完毕以后 使用$.fun 使用
$.extend({
	eatFood:function(){
		console.log('吃面,不吃蒜,不如来碗饭');
	}
})
