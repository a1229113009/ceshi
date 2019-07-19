var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//定义路由
router.get('/mongooseTest',function(req,res,next){
	mongoose.connect('mongodb://localhost/pets',{useMongoClient:true});
	mongoose.Promise=global.Promise;
	var Cat=mongoose.model('Cat',{name:String});
	
	var tom =new Cat({name:'Tom'});
	tom.save(function (err){
		if(err){
			console.log(err);
		}
		else{
			console.log('success insert');
		}
	});
	res.send('数据库连接测试');
})

module.exports = router;
