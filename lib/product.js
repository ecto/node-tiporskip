var Product = module.exports = {};

Product.tipsters = function (id, cb) {
  if (!id) {
    throw new Error('Must supply ID to product function');
  }
  var url = this.client.baseUrl + 'product/' + id + '/tipped-by';
  this.client.get(url, cb);
};

Product.tree = function (id, cb) {
  if (!id) {
    throw new Error('Must supply ID to product function');
  }
  var url = this.client.baseUrl + 'product/' + id + '/tree';
  this.client.get(url, cb);
};

Product.skip = function (id, cb) {
  if (!id) {
    throw new Error('Must supply ID to product function');
  }
  // TODO
  throw new Error('Not implemented');
};

Product.tip = function (id, cb) {
  if (!id) {
    throw new Error('Must supply ID to product function');
  }
  // TODO
  throw new Error('Not implemented');
};

Product.untip = function (id, cb) {
  if (!id) {
    throw new Error('Must supply ID to product function');
  }
  // TODO
  throw new Error('Not implemented');
};
