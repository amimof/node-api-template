var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/test');
var bcrypt = require('bcrypt');

var isValidPassword = function(user, password) {
	return bcrypt.compareSync(password, user.password);
}

module.exports = function() {
	passport.use('login', new LocalStrategy(function(username, password, done) {
		Test.findOne({ 'username': username }, function(err, user) {
			if(err) {
				console.log('Error: ' + err);
				return done(err, false, { message: err });
			}
			if(!user) {
				return done(null, false, { message: 'User Not Found' });
			}
			if(!isValidPassword(user, password)) {
				return done(null, false, { message: 'Unauthorized' });
			}
			return done(null, user, { message: 'Login Success' });
		});
	}));
};