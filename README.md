# node_mysql_orm
##NODE Mysql模块ORM

####使用方法如下：
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