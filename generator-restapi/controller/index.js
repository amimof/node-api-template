var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('ctrl_name', { type: String, required: true });
  },
  writing: function() {
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath('app/controllers/'+this.ctrl_name.toLowerCase()+'.js'),
      { name: this.ctrl_name, namec: _.capitalize(this.ctrl_name), namel: this.ctrl_name.toLowerCase() }
    );
  }
});
