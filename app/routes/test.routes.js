var test = require('../controllers/test');

module.exports = function(router) {
	// Test
	router.route('/tests')
		.post(test.createTest)
		.get(test.getTests);
	router.route('/tests/:test_id')
		.get(test.getTest)
		.put(test.updateTest)
		.delete(test.deleteTest);
}