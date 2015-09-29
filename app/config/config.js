// Put app config here
module.exports = {
	port: 8080,
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
