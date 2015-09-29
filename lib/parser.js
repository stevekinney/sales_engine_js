var csv2 = require('csv2'),
    fs = require('fs'),
    objectify = require('objectify-arrays');

function Parser() {}
var objectifiedCSVRows = [];

Parser.prototype.parse = function (file) {
  fs.createReadStream(file)
    .pipe(csv2())
    .pipe(objectify())
    .on('data', function (data) {
      objectifiedCSVRows.push(data);
    })
    .on('end', function (data) {
      console.log('hello');
    });
};

var parser = new Parser();
parser.parse('./data/merchants.csv');














//
// var fs = require('fs');
// var Converter = require('csvtojson').Converter;
// var csvConverter = new Converter();
//
// function Parser () {}
//
// Parser.prototype.parse = function (file) {
//   csvConverter.on('end_parsed', function (jsonObj) {
//     return jsonObj;
//   });
//
//   fs.createReadStream(file).pipe(csvConverter);
// };
//
// module.exports = Parser;
//
// var parser = new Parser();
// console.log(parser.parse('./data/merchants.csv'));
