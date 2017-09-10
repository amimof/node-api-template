var config = require('./config');
var mongoose = require('mongoose');
var log = require('../services/logger');

module.exports = function() {
	var db = mongoose.connect(config.db.uri, function(err) {
		if(err) {
			log.error(err);
		} else {
			log.infof('Connected to mongodb at %s', config.db.uri);
		}
	});
	return db;
};
