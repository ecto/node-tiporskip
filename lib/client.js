var Client = function (options) {
  options = options || {};

  var required = [
    'key',
    'secret'
  ];

  for (var i in required) {
    if (!options[required[i]]) {
      throw new Error('Must supply ' + i + ' to TipOrSkip client');
    }
  }

  this.key = options.key;
  this.secret = options.secret;
  this.debug = options.debug || false;

  this.log('connecting');
};

Client.prototype.log = function (level, message) {
  if (!this.debug) return;
  if (level && !message) {
    message = level;
    level = void 0;
  }
  var m = message;
  if (level) {
    m = level + ' : ' + m;
  }
  console.log('tiporskip : ' + m);
};

module.exports = Client;
