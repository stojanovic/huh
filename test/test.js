'use strict'

const test = require('tape')
const excuse = require('../')
const fs = require('fs')
const path = require('path')

const list = fs.readFileSync(path.join(__dirname, '../languages/en.txt'), 'utf8')
  .split('\n')
  .map(e => e.trim())
  .filter(e => e.length > 0)
  .filter(e => e.charAt(0) !== '#')
  .sort()

const rsList = fs.readFileSync(path.join(__dirname, '../languages/rs.txt'), 'utf8')
  .split('\n')
  .map(e => e.trim())
  .filter(e => e.length > 0)
  .filter(e => e.charAt(0) !== '#')
  .sort()

test('Language selection', t => {
  t.plan(3)

  t.same(excuse.getAll(), excuse.getAll('en'), 'should automatically set language to "en" if is not selected')
  t.same(excuse.getAll('rs'), rsList, 'should return correct list if language is selected')
  t.throws(() => excuse.getAll('xy'), 'should throw an error if non-existing language is selected')
})

test('Test if random excuse is received', t => {
  t.plan(5)

  for (let i = 0; i < 5; i++) {
    t.ok(list.indexOf(excuse.get()) >= 0, 'should return a random excuse')
  }
})

test('Test if all excuses are received', t => {
  t.plan(2)

  const allExcuses = excuse.getAll()
  const isOk = allExcuses.length === list.length && allExcuses.every((excuse, i) => excuse === list[i])
  t.ok(isOk, 'should return all excuses for "en" if languange is not selected')

  const allEnExcuses = excuse.getAll('rs')
  const isEnOk = allEnExcuses.length === rsList.length && allEnExcuses.every((excuse, i) => excuse === rsList[i])
  t.ok(isEnOk, 'should return all excuses for the selected language')
})
