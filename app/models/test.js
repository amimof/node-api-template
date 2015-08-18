var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
	username: String,
	password: String,
	created: String,
	updated: String
});

module.exports = mongoose.model('Test', TestSchema);