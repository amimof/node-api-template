// server.js
var config = require('./app/server/config'),
	db = require('./app/server/db')(),
	app = require('./app/server/server')(),
	log = require('./app/common/services/log')('default');

// Start the server
app.listen(config.port, config.host);
module.exports = app;

log.info('Magic is happening on port %s', config.port);
