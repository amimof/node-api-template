var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('ctrl_name', { type: String, required: true });
  },
  writing: function() {
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath('app/controllers/'+this.ctrl_name+'.js'),
      { name: this.ctrl_name }
    );
  }
});
