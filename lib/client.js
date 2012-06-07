var request = require('request');

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
  this.version = options.version || '1.0';
  this.debug = options.debug || false;
  this.user = require('./user');
  this.product = require('./product');
  this.user.client = this.product.client = this;

  this.baseUrl = 'http://tips.by/api/' + this.version + '/';

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

Client.prototype.get = function (url, cb) {
  request(url, function (req, res, body) {
    var ret;
    try {
      ret = JSON.parse(body);
    } catch (e) {}

    if (ret && cb) {
      cb(null, ret);
    }
  });
};

module.exports = Client;
