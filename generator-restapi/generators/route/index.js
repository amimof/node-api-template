var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('route_name', { type: String, required: true });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('route.js'),
      this.destinationPath('app/routes/'+_.lowerCase(this.options.route_name)+'.js'),
      { name: this.options.route_name, namec: _.capitalize(this.options.route_name), namel: _.lowerCase(this.options.route_name) }
    );
    this.log("Add this route to 'app/config/express.js' with the following:");
    this.log("require('../routes/"+_.lowerCase(this.options.route_name)+"')(router);");
  }
};
