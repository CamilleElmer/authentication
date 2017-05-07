var account = require('./config.js');
var bcrypt = require('bcrypt-nodejs');		//when running in gitbash nom install --save bcrypt-nodejs
var Seq= require('sequelize');	
var seq= new Seq('postgres://'+account.usernameDB+':'+account.passwordDB+'@localhost:5432/passportDB');

var User = seq.define('users', {
	id: {type:Seq.INTEGER, autoIncrement: true, primaryKey: true},
	email: {type: Seq.STRING, unique: true},
	password: Seq.STRING,
	name: Seq.STRING,
	age: Seq.INTEGER,
	IsRad: Seq.INTEGER
});						//name fo schema('users')is the name of the argurment, 

// User.generateHash = function(password){
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// };  These have been resplaced by bcryPT

User.validPassword = function(){
	return bcrypt.compareSync(password, this.password);
};

// User.sync();

module.exports = User;