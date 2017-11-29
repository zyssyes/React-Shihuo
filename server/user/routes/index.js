var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");
var CartModel = require("../model/CartModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cart/add', function(req, res, next) {
  if(!req.session || !req.session.username) {
	var result = {
		code: -77,
		message: "您还没有登录，请先登录"
	}
	res.send(JSON.stringify(result));
	return;
  }

  var cart = new CartModel();
  cart.username = req.session.username;
  cart.goods_id = req.query.goods_id;
  cart.goods_name = req.query.goods_name;
  cart.cnt = req.query.cnt;
  cart.save(function(err){
	var result = {
		code: 1
	}
	if(err) {
		result.code = -88;
		result.message = "保存失败";
	}
	res.send(JSON.stringify(result));
  })
});

router.get('/api/login', function(req, res, next) {
  UserModel.find({
  	username: req.query.username, 
  	psw: req.query.psw}, function(err, docs){
  		var result = {
  			code: 1
  		}
  		if(err || docs.length == 0) {
  			result.code = -99;
  			result.message = "登录失败！"
  		} else {
  			req.session.username = req.query.username;
  			console.log(req.session);
  		}
  		res.send(JSON.stringify(result));
  })
});

router.post('/api/regist', function(req, res){
 		UserModel.find({username:req.body.username},function(err,docs){
 		var result = {
			code: 1
		}
 		if(docs.length>0){
 			result.code = -112;
			result.message = "该用户已被注册了";
 		}
 		var users = new UserModel();
 		users.username=req.body.username;
 		users.psw=req.body.psw;
 		users.save((err)=>{
 			if(err){
 				result.code = -110;
 				result.message = '注册失败';
 			}else{
 				result.code = 1;
 				result.message ='注册成功';
 			}
 		});
 		res.send(JSON.stringify(result));
 	}); 
 		}); 



module.exports = router;
