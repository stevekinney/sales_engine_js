var csv2 = require('csv2'),
    fs = require('fs'),
    objectify = require('objectify-arrays');


var parse = module.exports = function (file, callback) {
  var objectifiedCSVRows = [];

  fs.createReadStream(file)
    .pipe(csv2())
    .pipe(objectify())
    .on('data', function (data) {
      objectifiedCSVRows.push(data);
    })
    .on('end', function () {
      callback(objectifiedCSVRows);
    });
};

parse('./data/merchants.csv', function (parsedRows) {
  console.log(parsedRows);
});
