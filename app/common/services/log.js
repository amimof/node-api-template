var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  timestamp: true,
  colorize:  true,
  level: (process.env.LOG_LEVEL || 'info').toLowerCase(),
  prettyPrint: true,
});

module.exports = function(name) {

  var silly = function(obj) {
    log('silly', obj || '');
  };

  var debug = function(obj) {
    log('debug', obj || '');
  }

  var info = function(obj) {
    log('info', obj || '');
  }

  var warn = function(obj) {
    log('warn', obj || '');
  }

  var error = function(obj) {
    log('error', obj || '');
  }

  var log = function(level, ...obj) {
    winston.log(level.toLowerCase() || 'info' , `[${name}]`, ...obj);
  }

  return {
    silly: silly,
    debug: debug,
    info: info,
    warn: warn,
    error: error,
    log: log
  }

}
