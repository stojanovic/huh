'use strict'

const fs = require('fs')
const path = require('path')

function getListForLanguage (lang) {
  if (!fs.existsSync(path.join(__dirname, `../languages/${lang}.txt`))) throw new Error('Language you selected does not exists, please select the other one')

  return fs
    .readFileSync(path.join(__dirname, `../languages/${lang}.txt`), 'utf8')
    .split('\n')
    .map(e => e.trim())
    .filter(e => e.length > 0)
    .filter(e => e.charAt(0) !== '#')
    .sort()
}

module.exports = {
  get (lang) {
    lang = lang || 'en'
    const list = getListForLanguage(lang)
    return list[Math.floor(Math.random() * list.length)]
  },
  getAll (lang) {
    lang = lang || 'en'
    const list = getListForLanguage(lang)
    return list
  }
}
