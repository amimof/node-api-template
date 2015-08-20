var kitten = require('../controllers/kitten.ctrl');

module.exports = function(router) {
	// Kitten
	router.route('/kittens')
		.post(kitten.createKitten)
		.get(kitten.getKittens);
	router.route('/kittens/:kitten_id')
		.get(kitten.getKitten)
		.put(kitten.updateKitten)
		.delete(kitten.deleteKitten);
	router.route('/kittens/test/:food')
		.get(kitten.getKittenFood);
}
