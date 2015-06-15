'use strict'

var test   = require('tape')
var excuse = require('../')
var fs     = require('fs')
var path   = require('path')
var infile = path.join(__dirname, '../excuses.txt')

var list   = fs.readFileSync(infile, 'utf8')
              .split('\n')
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e.length > 0;
              })
              .filter(function (e) {
                return e.charAt(0) !== '#';
              })
              .sort()

test('Test if random excuse is received', function(t) {
  t.plan(5)

  var i = 0;
  for (; i < 5; i++) {
    t.ok(list.indexOf(excuse.get()) >= 0, 'random excuse is received')
  }
})

test('Test if all excuses are received', function(t) {
  t.plan(1)

  var allExcuses = excuse.getAll()

  var isOk = allExcuses.length == list.length && allExcuses.every(function(excuse, i) {
    return excuse === list[i]
  })

  t.ok(isOk, 'All excuses are received')
})
