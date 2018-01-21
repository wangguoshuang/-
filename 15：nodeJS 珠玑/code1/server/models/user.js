var connection = require('./db.js');
var uuid = require('node-uuid');

/*
 * 集合`users`的文档`User`构造函数
 * @param {Object} user: 包含用户信息的一个对象
 */
function User(user) {
	this.id=user.id;
	this.name = user.name;
	this.password = user.password;
};

module.exports = User;

User.getUserByName = function (username, callback) {
	var selectSql = 'select * from user where user_name = ?';
	connection.query(selectSql, [username], function (err, result) {
		if (err) {
			console.log('getUserbyUsername err:' + err);
			return;
		}
		console.log('Get name success');
		var data=result[0];
		//console.log(data.id);
		callback(err, data);
	});
};
User.addUser= function (user, callback) {
	var id=uuid.v1();
	var selectSql = 'insert into user (id,user_name,password)  values (?,?,?)';

	connection.query(selectSql, [id,user.name,user.password], function (err, result) {
		if (err) {
			console.dir(err);
			console.log('addUser err:' + err);
			return;
		}
		console.log('Add User success');
		callback(err, result);
	});
};