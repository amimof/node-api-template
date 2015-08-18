var passport = require('passport');
var User = require('../models/test');

module.exports = function() {
	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});
	require('../strategies/local')();
};