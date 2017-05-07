//we are going to call in a new package and specificy passport local (object) we are goign to use and designate which signup.
//"passport-local = {
//	Strategy function"}

var localStrategy = require ('passport-local').Strategy;
var User = require ('./userModel');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport){
	passport.serializeUser(function(user, done){
		// console.log("User", user);
		done(null, user.id)
	})
	passport.deserializeUser(function(id, done){
		console.log("Id:", id);
		User.findOne({
			where: {id: id}
		}).then(function(user){
			done(user);  //moniter
		});
	});
	passport.use('local-signup', new localStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({
				where: {email: email}
			}).then(function(user){
				if(user){
					if(bcrypt.compareSync(password, user.password)){
						console.log(user.name + "is logged in");
						return done(null, user);
					} else {
						console.log("password is incorrect");
						return done(null, false);
					}
				} else {
					var newUser = req.body;
					newUser.email = email;
					newUser.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
					User.create(newUser)
					.then(function(result, err){  //moniter
						if(err){
							console.log("missing info");
							return done(null, false);
						} else{
							return done (null, result);
						}
					})
				}
			})
		});
	}));
};