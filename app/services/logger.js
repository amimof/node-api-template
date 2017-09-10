var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  timestamp: true,
  colorize:  true,
  level: (process.env.LOG_LEVEL || 'info').toLowerCase(),
  prettyPrint: true,
});

exports.silly = function(str, obj) {
  winston.log('silly', str, obj || {});
};
exports.sillyf = function(format, ...args) {
  winston.log('silly', format, ...args);
};
exports.debug = function(str, obj) {
  winston.log('debug', str, obj || {});
};
exports.debugf = function(format, ...args) {
  winston.log('debug', format, ...args);
};
exports.info = function(str, obj) {
  winston.log('info', str, obj || {});
}
exports.infof = function(format, ...args) {
  winston.log('info', format, ...args);
};
exports.warn = function(str, obj) {
  winston.log('warn', str, obj || {});
}
exports.warnf = function(format, ...args) {
  winston.log('warn', format, ...args);
};
exports.error = function(str, obj) {
  winston.log('error', str, obj || {});
}
exports.errorf = function(format, ...args) {
  winston.log('error', format, ...args);
};
exports.log = function(level, str, obj) {
  winston.log(level.toLowerCase() || 'info', str, obj || {});
}
