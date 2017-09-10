// Put app config here
module.exports = {
	port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
	host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	db: {
		uri: 'mongodb://ansible:ansible@localhost:27017/ansible'
	}
};
