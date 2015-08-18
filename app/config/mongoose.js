var config = require('./config');
var mongoose = require('mongoose');
var log = require('./log')();

module.exports = function() {
	var db = mongoose.connect(config.db.url, function(err) {
		if(err) {
			log.error(err);
		} else {
			log.info('Connected to mongodb at ' + config.db.url);
		}
	});
	return db;
};
