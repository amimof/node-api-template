var Kitten = require('../models/kitten');
var moment = require('moment');
var log = require('../config/log')();

exports.getKittenFood = function(req, res) {
	var food = req.params.food;
	res.json({ "message" : "Kittens likes to eat " + food });
};

exports.createKitten = function(req, res) {
	var kitten = new Kitten();
	kitten.username = req.body.username;
	kitten.password = createHash(req.body.password);
	kitten.created = moment().format();
	kitten.save(function(err) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json({ "message": "Kitten created", "kitten": kitten });
		}
	});
}

exports.getKitten = function(req, res) {
	Kitten.findById({
		_id: req.params.kitten_id
	}, function(err, kittens) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json(kittens);
		}
	});
}

exports.getKittens = function(req, res) {
	Kitten.find(function(err, kittens) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json(kittens);
		}
	});
}

exports.deleteKitten  = function(req, res) {
	Kitten.remove({
		_id: req.params.kitten_id
	}, function(err, kitten) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			res.json({ message: "Kitten deleted" });
		}
	});
}

exports.updateKitten = function(req, res) {
	Kitten.findById({
		_id: req.params.kitten_id
	}, function(err, kitten) {
		if(err) {
			log.error(err);
			res.send(err);
		} else {
			kitten.username = req.body.username;
			kitten.password = req.body.password;
			kitten.updated = moment().format();
			kitten.save(function(err) {
				if(err) {
					log.error(err);
					res.send(err);
				} else {
					res.json({ message: "Kitten updated" });
				}
			});
		}
	});
}
