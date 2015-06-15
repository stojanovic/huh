'use strict'

const fs       = require('fs')
const path     = require('path')
const infile   = path.join(__dirname, '/excuses.txt')

let list = fs
    .readFileSync(infile, 'utf8')
    .split('\n')
    .map(e => e.trim())
    .filter(e => e.length > 0)
    .filter(e => e.charAt(0) !== '#')
    .sort()

module.exports = {
  get() {
    return list[Math.floor(Math.random() * list.length)]
  },
  getAll() {
    return list
  }
}
