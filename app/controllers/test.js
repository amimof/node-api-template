var Test = require('../models/test');
var moment = require('moment');
var bcrypt = require('bcrypt');
var passport = require('passport');
var log = require('../config/log')();

var createHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

exports.createTest = function(req, res) {
	var test = new Test();
	test.username = req.body.username;
	test.password = createHash(req.body.password);
	test.created = moment().format();
	test.save(function(err) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json({ "message": "Test created", "test": test });
		}
	});
}

exports.getTest = function(req, res) {
	Test.findById({
		_id: req.params.test_id
	}, function(err, tests) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json(tests);
		}
	});
}

exports.getTests = function(req, res) {
	Test.find(function(err, tests) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json(tests);
		}
	});
}

exports.deleteTest  = function(req, res) {
	Test.remove({
		_id: req.params.test_id
	}, function(err, test) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json({ message: "Test deleted" });
		}
	});
}

exports.updateTest = function(req, res) {
	Test.findById({
		_id: req.params.test_id
	}, function(err, test) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			test.username = req.body.username;
			test.password = req.body.password;
			test.updated = moment().format();
			test.save(function(err) {
				if(err) {
					log.error(err);
					res.send(err);
				} else {
					res.json({ message: "Test updated" });
				}
			});
		}
	});
}

