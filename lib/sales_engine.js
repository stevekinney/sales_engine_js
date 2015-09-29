var MerchantRepository = require('./merchant_repo.js');

function SalesEngine() {}

SalesEngine.prototype.startup = function () {
  this.merchantRepository();
};

SalesEngine.prototype.merchantRepository = function () {
  return new MerchantRepository('./data/merchants.csv');
};

var engine = new SalesEngine();
engine.startup();
console.log(engine.merchantRepository());
