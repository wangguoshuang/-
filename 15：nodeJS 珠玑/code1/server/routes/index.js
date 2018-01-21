// 引入需要的模块
var express = require('express'),
 	router = express.Router(),
 	crypto = require('crypto'),
 	User = require('../models/user.js');


router.post("/reg",checkNotLogin);
router.post("/reg",function(req,res) {
	if (req.body['password-repeat'] != req.body['password']) {
		//req.flash('error', '两次输入的口令不一致');
		return res.redirect('/reg.html');
	}
	console.log(req.body['password'])

	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');

	var newUser = new User({
		name: req.body.username,
		password: password,
	});

	User.getUserByName(req.body.username,function(err, result){
		console.dir(result);
		if (err) {
			//err = 'Username already exists.';
			return res.redirect('/reg.html');
		}
		if(result.length>0){
			console.log('名称已经存在!!!');
			res.redirect('/reg.html');
		}
		else{
			User.addUser(newUser,function(err, data){
				console.log(data.insertId);
				newUser.id=data.insertId;
				req.session.user = newUser;
				res.redirect('/reg.html');
			})

		}
	});
});
router.post("/login",function(req,res) {
	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');

	User.getUserByName(req.body.username,function(err, result){
		console.dir(result);
        if (!result) {
        return res.send('用户不存在!');
        }
        if (result.password != password) {
            res.send('密码错误！！');
        }
        req.session.user = result;
        res.send('登入成功！！！');
	});
});
router.get("/logout",checkLogin);
router.get("/logout",function(req,res) {
    console.dir(req.session.user);
    req.session.user=null;
    res.send('登出成功！！！');
});
 function checkLogin(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login.html');
    }
    next();
}
function checkNotLogin(req, res, next) {
    if (req.session.user) {
        return res.redirect('/index.html');
    }
    next();
}

module.exports = router;
