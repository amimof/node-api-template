var controller = require('../controllers/<%= name %>');

module.exports = function(router) {
	router.route('/<%= namel %>s')
		.get(controller.get_<%= namel %>s)
		.post(controller.create_<%= namel %>);
	router.route('/<%= namel %>s/:id')
		.get(controller.get_<%= namel %>)
		.put(controller.update_<%= namel %>)
		.delete(controller.delete_<%= namel %>);
};
