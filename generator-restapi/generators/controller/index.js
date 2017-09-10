var Generator = require('yeoman-generator');
var _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('ctrl_name', { type: String, required: true });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath('app/controllers/'+_.lowerCase(this.options.ctrl_name)+'.js'),
      { name: this.options.ctrl_name, namec: _.capitalize(this.options.ctrl_name), namel: _.lowerCase(this.options.ctrl_name) }
    );
  }
};
