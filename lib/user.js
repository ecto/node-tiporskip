var request = require('request');
var User = module.exports = {};

User.info = function (username, cb) {
  if (!username) {
    throw new Error('Must supply username to user function');
  }
  var url = this.client.baseUrl + 'user/' + username;
  this.client.get(url, cb);
};

User.tips = function (username, cb) {
  if (!username) {
    throw new Error('Must supply username to user function');
  }
  var url = this.client.baseUrl + 'user/' + username + '/tips';
  this.client.get(url, cb);
};

User.followers = function (username, cb) {
  if (!username) {
    throw new Error('Must supply username to user function');
  }
  var url = this.client.baseUrl + 'user/' + username + '/followers';
  this.client.get(url, cb);
};

User.following = function (username, cb) {
  if (!username) {
    throw new Error('Must supply username to user function');
  }
  var url = this.client.baseUrl + 'user/' + username + '/following';
  this.client.get(url, cb);
};

User.follow = function (origin, target, cb) {
  if (!origin || !target) {
    throw new Error('Must supply origin and target to user function');
  }
  // TODO
  throw new Error('Not implemented');
};

User.unfollow = function (origin, target, cb) {
  if (!origin || !target) {
    throw new Error('Must supply origin and target to user function');
  }
  // TODO
  throw new Error('Not implemented');
};

