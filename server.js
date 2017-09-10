// server.js
var config = require('./app/config/config'),
	db = require('./app/config/mongoose')(),
	app = require('./app/config/express')(),
	log = require('./app/services/logger');

// Start the server
app.listen(config.port, config.host);
module.exports = app;

log.infof('Magic is happening on port %s', config.port);
