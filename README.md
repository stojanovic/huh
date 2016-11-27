[![Build Status](https://travis-ci.org/stojanovic/huh.svg)](https://travis-ci.org/stojanovic/huh)  [![npm version](https://badge.fury.io/js/huh.svg)](http://badge.fury.io/js/huh)

# Huh
Random "The Bastard Operator From Hell"-style excuse generator.

## Usage

Install module from npm - `npm i huh`.

Module API is simple, use `excuse.get(lang)` to get one random excuse or
`excuse.getAll(lang)` to get an array with all of them.

Where `lang` is any ISO Alpha-2 2-letter country code for which .txt file exists in languages folder.
Default language is english, if you select non-existing language error will be thrown.

```

const excuse = require('huh')

excuse.get('en') // Returns 1 random excuse

// ie. 'Bad user karma.'
// or 'Cache miss - please take better aim next time'
// or 'Sand fleas eating the Internet cables'
// or 'We are Microsoft.  What you are experiencing is not a problem; it is an undocumented feature.'

excuse.getAll('en') // Returns an array with all excuses

```

Or install module as global (`npm i huh -g`) and just run `huh` from terminal.

## List

Basic list is taken from [here](http://pages.cs.wisc.edu/~ballard/bofh/).

To add new excuses update `languages/xx.txt` where `xx` is the language you want to update or simply add a file for a new language and send pull request.

## Todo

- [x] - Add CLI support
- [x] - Add multi-language support?
- [ ] - Add Browser support

## What's new?

See [RELEASES](https://github.com/stojanovic/huh/releases)

## License

MIT -- see [LICENSE](LICENSE.md)
