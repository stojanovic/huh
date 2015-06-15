'use strict';

var fs = require('fs');
var path = require('path');
var infile = path.join(__dirname, '/excuses.txt');

var list = fs.readFileSync(infile, 'utf8').split('\n').map(function (e) {
  return e.trim();
}).filter(function (e) {
  return e.length > 0;
}).filter(function (e) {
  return e.charAt(0) !== '#';
}).sort();

module.exports = {
  get: function get() {
    return list[Math.floor(Math.random() * list.length)];
  },
  getAll: function getAll() {
    return list;
  }
};
