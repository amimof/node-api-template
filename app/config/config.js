// Put app config here

var getPort = function() {
	return process.env.OPENSHIFT_NODEJS_PORT || 8080;
}

module.exports = {
	port: getPort(),
	db: {
		url: 'mongodb://ansible:ansible@localhost:27017/ansible'
	},
	log: {
		filename: 'error.log',
		level: 'debug',
		maxsize: '10000000',
		maxFiles: '10'
	},
};
