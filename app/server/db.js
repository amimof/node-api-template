var config = require('./config');
var mongoose = require('mongoose');
var log = require('../common/services/log')('db');

module.exports = function() {
	mongoose.Promise = global.Promise;
	var db = mongoose.connect(config.db.uri, { useMongoClient: true }, function(err) {
		if(err) {
			log.error(err);
		} else {
			log.info(`Connected to mongodb at ${config.db.uri}`);
		}
	});
	return db;
};
