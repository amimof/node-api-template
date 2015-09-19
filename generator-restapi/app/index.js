var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    method1: function() {
      console.log('Method 1 just ran');
    },
    method2: function() {
      console.log('Method 2 just ran');
    }
});
