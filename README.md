## NODE Mysql模块 简易版 ORM

参考Laravel 写法编写，可满足一般sql需求

#### 基本使用方法如下：
-------------
	var orm_func = require('./library/orm');
	//var sql = orm_func.useTable("test").where('id',1).where('aa','>',1).orWhere('cc','!=',1).delete();
	//var sql = orm_func.useTable("test").where('id',1).where('aa','>',1).orWhere('cc','!=',1).updateObj({xx:11,ww:22});
	//var sql = orm_func.useTable("test").where('id',1).where('aa','>',1).orWhere('cc','!=',1).update("qqq",111);
	//var sql = orm_func.useTable("test").create('qqqq',111);
	//var sql = orm_func.useTable("test").createObj({xx:11,ww:22});
	//var sql = orm_func.useTable("test").select("aaa,cc,vvv,sss").where('id',1).orWhere('cc','!=',1).groupBy('aa').groupBy('cc').orderBy('aa','asc').orderBy('xx','desc').limit(10,20).get();
	//var sql = orm_func.whereRaw("SELECT * FROM test where id=? AND cc>?",[1,222]).get();
	//var sql = orm_func.useTable("test").insert('qqqq',111);
	var sql = orm_func.useTable("test").insertObj({xx:11,ww:22});
	console.log(sql);

#### Mysql模块中直接使用生成的sql
-------------
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'me',
	  password : 'secret',
	  database : 'my_db'
	});

	connection.connect();
	connection.query(sql, function (error, results, fields) {
	  //TODO
	});
	connection.end();

更多用法请参考：https://github.com/mysqljs/mysql
