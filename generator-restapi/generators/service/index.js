var Generator = require('yeoman-generator');
var _ = require('lodash');
var path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('service_name', { type: String, required: true });
    this.argument('model_name', { type: String, required: true });
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
      this.templatePath('service.js'),
      this.destinationPath(path.join(this.config.get('root'), 'services', _.lowerCase(this.options.service_name)+'.js')),
      {
        name: this.options.service_name, namec: _.capitalize(this.options.service_name), namel: _.lowerCase(this.options.service_name),
        model_name: this.options.model_name, model_namec: _.capitalize(this.options.model_name), model_namel: _.lowerCase(this.options.model_name)
      }
    );
  }
};
