var rbac_func = require('./library/rbac');
rbac_func.useTable("test").where('id',1).where('aa','>',1).orWhere('cc','!=',1).delete().then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").where('id',1).where('aa','>',1).orWhere('cc','!=',1).updateObj({xx:11,ww:22}).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").where('id',1).where('aa','>',1).orWhere('cc','!=',1).update("qqq",111).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").create('qqqq',111).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").createObj({xx:11,ww:22}).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").select("aaa,cc,vvv,sss").where('id',1).orWhere('cc','!=',1).groupBy('aa').groupBy('cc').orderBy('aa','asc').orderBy('xx','desc').limit(10,20).get().then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.whereRaw("SELECT * FROM test where id=? AND cc>?",[1,222]).get().then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").insert('qqqq',111).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.useTable("test").insertObj({xx:11,ww:22}).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.doSqlCmdAsync("select * from test").then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});

rbac_func.doSqlCmdAsync("select * from test where id=?",[1]).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("err:",err);
});
