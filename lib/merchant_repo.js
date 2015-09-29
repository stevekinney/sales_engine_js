var Parser = require('./parser.js');

function MerchantRepository(file) {
  this.createMerchants(file);
}

MerchantRepository.prototype.createMerchants = function (file) {
  return new Parser().parse(file);
};

module.exports = MerchantRepository;
