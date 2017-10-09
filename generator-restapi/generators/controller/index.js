var Generator = require('yeoman-generator');
var _ = require('lodash');
var path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('ctrl_name', { type: String, required: true });
    this.option('root', { type: String, default: 'app/common/' });
    let root = this.config.get('root');
    if(typeof root === 'undefined') {
      this.config.set('root', this.options['root']);
    } else {
      if(this.config.get('root') !== this.options['root']) {
        this.config.set('root', this.options['root'])
      }
    }
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath(path.join(this.config.get('root'), 'controllers', _.lowerCase(this.options.ctrl_name)+'.js')),
      { name: this.options.ctrl_name, namec: _.capitalize(this.options.ctrl_name), namel: _.lowerCase(this.options.ctrl_name) }
    );
  }
};
