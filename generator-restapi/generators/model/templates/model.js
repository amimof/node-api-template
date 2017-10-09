var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var <%= namec %> = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('<%= namec %>', <%= namec %>);
