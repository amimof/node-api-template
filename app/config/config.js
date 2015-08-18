// Put app config here
module.exports = {
	port: 8082,
	db: {
		url: 'mongodb://ansible:ansible@localhost:27017/ansible'
	},
	log: {
		filename: 'C:\\temp\\nodejs.log',
		level: 'debug',
		maxsize: '10000000',
		maxFiles: '10'
	},
};
