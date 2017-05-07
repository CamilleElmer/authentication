var User = require('./userModel');			//If I wanted to do a specific user './../models/userModel' would be used
// var User = require('.//userCtrl');		// app.post('/login', passport.authenticate('local-signup'), userCtrl.login); is reference for index.js

module.exports = {
	login: function(req, res){
		res.send();
	},
	read: function(req, res){
		User.findAll()
		.then(function(result, err){
			if(err){
				res.send(err);			
			} else {
				res.send(result);
			}
		});
	},
	update: function(req, res){
		User.findOne({
			where: {id: req.params.id}
		})
		.then(function(user){
			user.update(req.body)
				.then(function(result, err){
					if(err){
						re.send(err);
					} else {
						res.send(result);
				}
			})
		});
	},
	delete: function(req, res){
		User.destroy({
			where: {
				where: {id: req.params.id}
			}
		});
	},
	getMe: function(req, res){
		if(req.user){
			User.findOne({
				where: {id:req.user.id}
			}).then(function(result, err){
				if(err){
					res.send(err);
				} else{
					res.send(result);
				}
			});
		} else {
			res.send();
		}
	},			//this would be for your specific profile ex facebook
	logout: function(req, res){
		req.logout();
		console.log(req.params.id + "is logged out");
		res.send();
	}
};