var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require ('express-session');

var userCtrl = require('./userCtrl');  //'./ctrls/userCtrl would be an alternative for more files
var config = require('./config');
var app = express();				//kind of like a closure
//at this point you  would npm init for github to create package.json // at this point in github npm install --save cors express body-parser

require('./passport')(passport);

app.use(cors());
app.use(session({
	secret: "mom",
	resave: true,
	saveUninitialize: true,
	cookie: {maxAge: 1000*60*60*2}	//Expire time and creates a cookie as soon as th euser has logged in
//	maxAge: 1000*60*60*2
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());  //this is where you would put your front end information.

app.post('/login', passport.authenticate('local-signup'), userCtrl.login);
app.get('/users', userCtrl.read);
// app.post('/users', userCtrl.create);
app.put('/users/:id', userCtrl.update);
app.delete('/users/:id', userCtrl.delete);
app.get('/users/me', userCtrl.getMe);
app.get('/logout', userCtrl.logout);
//app.post('/login/whatever'passport.authenticate('local-signup'), userCtrl.login);

app.listen(8000, function(){
	console.log("running on 8000");
});									//This is where you would do nodemon to see if it is working
