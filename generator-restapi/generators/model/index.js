var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('model_name', { type: String, required: true });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath('app/models/'+_.lowerCase(this.options.model_name)+'.js'),
      { name: this.options.model_name, namec: _.capitalize(this.options.model_name), namel: _.lowerCase(this.options.model_name) }
    );
  }
};
